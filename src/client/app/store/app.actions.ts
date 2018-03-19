import { Injectable } from '@angular/core';
import { Action } from 'redux';
import {Hero} from '../models/hero';
import { NgRedux } from '@angular-redux/store';
import { IHeroState } from './model';

export interface AnyAction extends Action {
  payload: any;
}

@Injectable()
export class HeroActions {

  static GET_HEROES = 'GET_HERO';
  static GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
  static GET_HEROES_ERROR = 'GET_HEROES_ERROR';

  static GET_HERO = 'GET_HERO';
  static GET_HERO_SUCCESS = 'GET_HERO_SUCCESS';
  static GET_HERO_ERROR = 'GET_HERO_ERROR';

  static ADD_HERO = 'ADD_HERO';
  static ADD_HERO_SUCCESS = 'ADD_HERO_SUCCESS';
  static ADD_HERO_ERROR = 'ADD_HERO_ERROR';

  static DELETE_HERO = 'REMOVE_HERO';
  static DELETE_HERO_SUCCESS = 'REMOVE_HERO_SUCCESS';
  static DELETE_HERO_ERROR = 'REMOVE_HERO_ERROR';

  static UPDATE_HERO = 'UPDATE_HERO';
  static UPDATE_HERO_SUCCESS = 'UPDATE_HERO_SUCCESS';
  static UPDATE_HERO_ERROR = 'UPDATE_HERO_ERROR';
  
  static SELECT_HERO = 'SELECT_HERO';

  constructor(private ngRedux: NgRedux<IHeroState>) {}

  getHeroes = () => this.ngRedux.dispatch({type: HeroActions.GET_HEROES});

  getHero = (hero: Hero) => this.ngRedux.dispatch({type: HeroActions.GET_HERO});

  addHero = (hero: Hero) => this.ngRedux.dispatch({type: HeroActions.ADD_HERO, payload: hero });

  deleteHero = (hero: Hero) => this.ngRedux.dispatch({ type: HeroActions.DELETE_HERO, payload: hero });

  updateHero = (hero: Hero) =>  this.ngRedux.dispatch({ type: HeroActions.UPDATE_HERO, payload: hero });

  select = (hero: Hero) =>  this.ngRedux.dispatch({ type: HeroActions.SELECT_HERO, payload: hero });
  
}