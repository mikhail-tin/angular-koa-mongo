import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { HeroActions } from '../store/hero.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import { HeroService } from './hero.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from 'rxjs/scheduler/Action';

const BASE_URL = '/api';

@Injectable()
export class HeroEpics {

  constructor(private heroService: HeroService) {}

 /* errorHandling = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.GET_HEROES_ERROR)
    .mergeMap(({payload}) => {
        return sayServerAboutError()
          .map(result => ({ type: '', payload: result }))
          .catch(error => Observable.of({ type: '', payload: error}));
        });
  } */

  getHeroes = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.GET_HEROES)
      .mergeMap(({payload}) => {
        return this.heroService.getHeroes()
          .map(result => ({ type: HeroActions.GET_HEROES_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.GET_HEROES_ERROR, payload: error}));
        });
  }

  addHero = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.ADD_HERO)
      .mergeMap(({payload}) => {
        return this.heroService.addHero(payload.name)
          .map(result => ({ type: HeroActions.ADD_HERO_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.ADD_HERO_ERROR }));
        });
  }

  deleteHero = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.DELETE_HERO)
      .mergeMap(({payload}) => {
        return this.heroService.deleteHero(payload)
          .map(result => ({ type: HeroActions.DELETE_HERO_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.DELETE_HERO_ERROR, payload: {payload}}));
        });
  }

  updateHero = (action$: ActionsObservable<any>) => {
    return action$.ofType(HeroActions.UPDATE_HERO)
      .mergeMap(({payload}) => {
        return this.heroService.updateHero(payload)
          .map(result => ({ type: HeroActions.UPDATE_HERO_SUCCESS, payload: result }))
          .catch(error => Observable.of({ type: HeroActions.UPDATE_HERO_ERROR, payload: {payload}}));
        });
  }

}
