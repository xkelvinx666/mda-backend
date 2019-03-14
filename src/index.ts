import {ModelDrivenArchitecture} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ModelDrivenArchitecture};

export async function main(options: ApplicationConfig = {}) {
  options = {
    ...options,
    rest: {
      basePath: '/api',
      port: 3001,
    },
  };
  const app = new ModelDrivenArchitecture(options);
  await app.boot();
  await app.migrateSchema();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
