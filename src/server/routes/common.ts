import * as Router from 'koa-router';
import { Context } from 'koa';
import {readFileThunk} from '../utils/helpers';
import config from '../config/server-config';

const commonRoutes = new Router()
  .get(/(|^$)/, getIndex)
;

async function getIndex(ctx: Context) {
  ctx.body = await readFileThunk(config.localStaticPath + '/index.html');
}

async function loggingRequest(ctx, next) {
  console.log('Url:', ctx.url);
  await next();
}

export { 
  commonRoutes, 
  loggingRequest
}