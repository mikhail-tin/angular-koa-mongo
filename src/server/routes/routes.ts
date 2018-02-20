import * as Router from 'koa-router';
import { Context } from 'koa';
import {HeroServise} from '../services/hero.service';

const heroService = new HeroServise();

const heroRouter = new Router();

export default heroRouter
  .get('/', getHeroes)
  .get('/api/heroes', getHeroes)
  .get('/api/heroes/:id', getHero)
  .put('/api/heroes', updateHero)
  .delete('/api/heroes/:id', deleteHero)
  .post('/api/heroes', addHero)
  ;

async function getHeroes(ctx: Context) {
  let queryName = ctx.query.name;
  let heroes = await heroService.getHeroes(queryName);
  ctx.body = JSON.stringify(heroes);
}

async function getHero(ctx: Context) {
  let id = ctx.params.id;
  let hero = await heroService.getHero(id);
  ctx.body = JSON.stringify(hero);
}

async function addHero(ctx: Context) {
  let data = ctx.request.body;
  let hero = await heroService.addHero(data);
  ctx.body = JSON.stringify(hero);
}

async function updateHero(ctx: Context) {
  let updatedHero = ctx.request.body;
  let heroes = await heroService.updateHero(updatedHero)
  ctx.body = JSON.stringify(heroes);
}

async function deleteHero(ctx: Context) {
    let id = ctx.params.id;
    let heroes = await heroService.deleteHero(id);
    ctx.body = JSON.stringify(heroes);
}