import { Hero } from '../models/hero'
import { Action } from 'redux';

export interface IGlobalState {
    heroesState: IHeroState,
    routerReducer: any
}

export interface IHeroState {
  pending: boolean,
  error: any,
  heroes: Hero[];
  newHero: Hero,
  selectedHero: Hero,
  hero: Hero
  filterHero: string
}

export const INITIAL_STATE: IGlobalState = {
    heroesState: {
        pending: false,
        error: null,
        heroes: [],
        newHero: null,
        selectedHero: null,
        hero: null,
        filterHero: ''
    },
    routerReducer: null
}

export interface AnyAction extends Action {
    payload: any;
}