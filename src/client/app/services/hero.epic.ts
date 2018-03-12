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
    return action$.ofType(HeroActions.GET)
      .mergeMap(({payload}) => {
        return this.heroService.getHeroes()
          .map(result => ({
            type: HeroActions.GET_SUCCESS,
            payload: result
          }))
          .catch(error => Observable.of({
            type: HeroActions.GET_ERROR
          }));
        });
  }
}