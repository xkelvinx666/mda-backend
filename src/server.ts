import * as Koa from 'koa';

import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import * as PostgressConnectionStringParser from 'pg-connection-string';

import { config } from './config';

import { GLOBAL_MIDDLEWARE } from './kernal/http';
import APPS from './kernal/app';

import * as path from 'path';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Get DB connection options from env variable
const connectionOptions = PostgressConnectionStringParser.parse(config.databaseUrl);

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnection({
    type: 'postgres',
    host: connectionOptions.host,
    port: connectionOptions.port,
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    synchronize: true,
    logging: false,
    entities: [
        path.join(__dirname, '/**/entity/**/*{.ts,.js}')
    ],
    extra: {
        ssl: config.dbsslconn, // if not development, will use SSL
    }
 }).then(async connection => {

    const app = new Koa();

    // 注册全局中间件
    GLOBAL_MIDDLEWARE.forEach(globalMiddleware => {
        app.use(globalMiddleware);
    });

    // 注册app
    APPS.forEach((callback) => {
        callback(app);
    });

    app.listen(config.port);

    console.log(`Server running on port ${config.port}`);

}).catch(error => console.log('TypeORM connection error: ', error));
