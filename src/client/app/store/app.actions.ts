import { Injectable } from '@angular/core';
import { Action } from 'redux';
import {Hero} from '../models/hero';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

export interface HeroAction extends Action {
  payload: any;
}

@Injectable()
export class HeroActions {

  static GET = 'GET';
  static GET_SUCCESS = 'GET_SUCCESS';
  static GET_ERROR = 'GET_ERROR';

  static ADD = 'ADD';
  static ADD_SUCCESS = 'ADD_SUCCESS';
  static ADD_ERROR = 'ADD_ERROR';

  static REMOVE_SUCCESS = 'REMOVE_SUCCESS';
  static REMOVE = 'REMOVE';
  static REMOVE_ERROR = 'REMOVE_ERROR';

  static UPDATE = 'UPDATE';
  static UPDATE_SUCCESS = 'UPDATE_SUCCESS';
  static UPDATE_ERROR = 'UPDATE_ERROR';
  
  static SELECT = 'SELECT';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  get(): void {
    this.ngRedux.dispatch({type: HeroActions.GET});
  }

  add(hero: Hero): void {
    this.ngRedux.dispatch({type: HeroActions.ADD, payload: hero });
  }

  remove(hero: Hero): void {
    this.ngRedux.dispatch({ type: HeroActions.REMOVE, payload: hero });
  }

  update(hero: Hero): void {
    this.ngRedux.dispatch({ type: HeroActions.UPDATE, payload: hero });
  }

  select(hero: Hero): void {
    this.ngRedux.dispatch({ type: HeroActions.SELECT, payload: hero });
  }
}