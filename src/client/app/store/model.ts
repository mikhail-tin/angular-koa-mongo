import { Hero } from '../models/hero'

export interface IGlobalStore {
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

export const INITIAL_STATE: IGlobalStore = {
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