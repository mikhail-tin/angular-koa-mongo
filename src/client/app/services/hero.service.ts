import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  heroesUrl = 'http://localhost:3000/heroes';

  constructor(public http: Http, private messageService: MessageService) {}

  getHeroes()/*: Observable<Hero[]>*/ {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get(this.heroesUrl).map(res => res.json());
  }

  getHero(_id: number)/*: Observable<Hero>*/ {
    return this.getHeroes().map(res => res.default.find(hero => hero.id == _id));
  }
};
