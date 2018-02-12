import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../models/hero';


@Injectable()
export class HeroService {

  heroesUrl = 'http://localhost:3000/heroes';

  constructor(public http: Http) {}

  getHeroes()/*: Observable<Hero[]>*/ {
    return this.http.get(this.heroesUrl).map(res => res.json());
  }

  getHero(_id)/*: Observable<Hero>*/ {
    return this.getHeroes().map(res => res.find(hero => hero.id == _id));
  }
};
