import { Action } from 'redux';
import { Hero } from '../models/hero'

export interface IAppState {
  pending: boolean,
  error: any,
  heroes: Hero[];
  newHero: Hero,
  selectedHero: Hero,
  hero: Hero
  filterHero: string
}

export const INITIAL_STATE: IAppState = {
  pending: false,
  error: null,
  heroes: [],
  newHero: null,
  selectedHero: null,
  hero: null,
  filterHero: ''
};
