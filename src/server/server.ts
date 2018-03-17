import * as koaBody from 'koa-body';
import * as logger from 'koa-logger';
import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as compose from 'koa-compose'; 
import config from './config/server-config';
import heroRouter from "./routes/routes";
import {commonRoutes, loggingRequest} from "./routes/common";
const cors = require('@koa/cors');

const app = module.exports = new Koa();

app.use(cors());
app.use(logger());
app.use(koaBody());
app.use(mount('/', serve(config.localStaticPath)));
app.use(loggingRequest);
app.use(compose([heroRouter.routes(), commonRoutes.routes()]));

if (!module.parent) {
  app.listen(3000);
}

console.log('Server running on port 3000');