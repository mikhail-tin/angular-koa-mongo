import * as Router from 'koa-router';
import { Context } from 'koa';
import {HeroServise} from '../services/hero.service';

const heroService = new HeroServise();

export default new Router()
  .get('/', getHeroes)
  .get('/api/heroes', getHeroes)
  .get('/api/heroes/:id', getHero)
  .put('/api/heroes', updateHero)
  .delete('/api/heroes/:id', deleteHero)
  .post('/api/heroes', addHero)
;

async function getHeroes(ctx: Context) {
  ctx.body = JSON.stringify(await heroService.getHeroes());
}

async function getHero(ctx: Context) {
  ctx.body = JSON.stringify(await heroService.getHero(ctx.params.id));
}

async function addHero(ctx: Context) {
  ctx.body = JSON.stringify(await heroService.addHero(ctx.request.body));
}

async function updateHero(ctx: Context) {
  ctx.body = JSON.stringify(await heroService.updateHero(ctx.request.body));
}

async function deleteHero(ctx: Context) {
    ctx.body = JSON.stringify(await heroService.deleteHero(ctx.params.id));
}