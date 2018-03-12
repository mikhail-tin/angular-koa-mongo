import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { HeroActions } from '../store/app.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HeroService } from './hero.service';

const BASE_URL = '/api';

@Injectable()
export class HeroEpics {

  constructor(
    private heroService: HeroService,
    private http: Http) {}

  get = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.GET_HEROES)
      .mergeMap(({payload}) => {
        return this.heroService.getHeroes()
          .map(result => ({ type: HeroActions.GET_HEROES_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.GET_HEROES_ERROR }));
        });
  }

  add = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.ADD_HERO)
      .mergeMap(({payload}) => {
        return this.heroService.addHero(payload.name)
          .map(result => ({ type: HeroActions.ADD_HERO_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.ADD_HERO_ERROR }));
        });
  }

  delete = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.DELETE_HERO)
      .mergeMap(({payload}) => {
        return this.heroService.addHero(payload.name)
          .map(result => ({ type: HeroActions.DELETE_HERO_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.DELETE_HERO_ERROR }));
        });
  }
}