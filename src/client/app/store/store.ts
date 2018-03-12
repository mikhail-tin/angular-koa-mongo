import { Action } from 'redux';
import { Hero } from '../models/hero'

export interface IAppState {
  pending: boolean,
  error: any,
  heroes: any[];
  newHero: any,
  selectedHero: any,
  filterHero: string
}

export const INITIAL_STATE: IAppState = {
  pending: false,
  error: null,
  heroes: [],
  newHero: null,
  selectedHero: null,
  filterHero: ''
};
