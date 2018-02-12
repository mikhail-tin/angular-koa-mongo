import * as koaBody from 'koa-body';
import * as logger from 'koa-logger';
import * as path from 'path';
import * as Koa from 'koa';
import routes from "./routes";
import config from './config/server-config';
import * as koaStatic from 'koa-static';

const app = module.exports = new Koa();

app.use(logger());
app.use(koaBody());
let clientDir = path.resolve(__dirname, '../dev/client');
app.use(koaStatic(clientDir));
app.use(async (ctx, next) => {
  console.log('Url:', ctx.url);
  await next();
});
app.use(routes.routes());

if (!module.parent) app.listen(3000);
console.log('Server running on port 3000');
