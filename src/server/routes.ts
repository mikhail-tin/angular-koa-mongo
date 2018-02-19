import * as Router from 'koa-router';
import { Context, } from "koa";

const router = new Router();

class Hero {
  id: number;
  name: string;
}

let heroes: Hero[] = [
  {id: 1, name: 'Archy'},
  {id: 2, name: 'One-Two(Wild Bunch)'},
  {id: 3, name: 'Handsome Bob(Wild Bunch)'},
  {id: 4, name: 'Mumbles(Wild Bunch)'},
  {id: 5, name: 'Johnny'}
];

export default router
  .get('/', getHeroes)
  .get('/api/heroes', getHeroes)
  .get('/api/heroes/:id', getHero)
  .put('/api/heroes', updateHero)
  .delete('/api/heroes/:id', deleteHero)
  .post('/api/heroes', addHero)
  ;

async function getHeroes(ctx: Context) {
  let queryName = ctx.query.name;
  if(queryName){
    ctx.body = JSON.stringify(heroes.filter(x => x.name.toLowerCase().includes(queryName.toLowerCase())));
  } else {
    ctx.body = JSON.stringify(heroes);
  }
}

async function getHero(ctx: Context) {
  let id = ctx.params.id;
  let hero = heroes.find(x=> x.id == id);
  ctx.body = JSON.stringify(hero);
}


async function addHero(ctx: Context) {
  let data = ctx.request.body;
  let hero: Hero = {id: 6, name: data};
  heroes.push(hero);
  ctx.body = JSON.stringify(hero);
}

async function updateHero(ctx: Context) {
  let updatedHero = <Hero>ctx.request.body;
  heroes = heroes.map(
    function(x) {
      if(x.id == updatedHero.id){
         return updatedHero;
      }
      return x;
    }
  )
}

  async function deleteHero(ctx: Context) {
    let id = ctx.params.id;
    heroes = heroes.filter(x => x.id != id);
    ctx.body = JSON.stringify(heroes);
}
