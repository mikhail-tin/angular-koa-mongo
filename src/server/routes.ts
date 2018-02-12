import * as Router from 'koa-router';
import * as heroesList from './database/heroes'

const router = new Router();

export default router
  .get('/', list)
  .get('/heroes', list);

async function list(ctx) {
  ctx.body = heroesList;
}
