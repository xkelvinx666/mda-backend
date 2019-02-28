import * as jwt from 'koa-jwt';
import { config } from '../config';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import * as winston from 'winston';
import { logger } from '../logging';

export const GLOBAL_MIDDLEWARE = [
    helmet(),
    cors(),
    logger(winston),
    bodyParser()
];

export const MIDDLEWARE = {
    jwt: jwt({ secret: config.jwtSecret })
};
