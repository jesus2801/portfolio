import 'reflect-metadata';
import {App} from './server.config';

//Environment Variables
import path from 'path';
require('dotenv').config(path.resolve(__dirname, `../.env`));

async function main(): Promise<any> {
  const app: any = new App();
  const server = await app.listen();
  return server;
}

export const server = main();
