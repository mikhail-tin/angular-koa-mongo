import { Action } from 'redux';
import { Hero } from '../models/hero';
import { AnyAction } from './hero.actions';
import { IHeroState, INITIAL_STATE } from './model';
import { HeroActions } from './hero.actions';


export function heroReducer(state: IHeroState = INITIAL_STATE.heroesState, action: AnyAction): IHeroState {
  switch(action.type) {

    case HeroActions.GET_HEROES:
      return Object.assign({},
        state, 
        {pending: true}
      );
    case HeroActions.GET_HEROES_SUCCESS:
      return Object.assign({}, 
        state, 
        {heroes: action.payload},
        {pending: false}
      );
    case HeroActions.GET_HEROES_ERROR:
      return Object.assign({}, 
        state, 
        {heroes: []}, 
        {error: "Heroes was not fetched"},
        {pending: false}
      );

    case HeroActions.ADD_HERO:
      return Object.assign({}, 
        state, 
        {heroes: [...state.heroes, {id: null, name: action.payload.name}]},
        {pending: true}
      );
    case HeroActions.ADD_HERO_SUCCESS:
      let heroes = state.heroes.filter(x=> x._id != null);
      return Object.assign({}, 
        state, 
        {heroes: [...heroes, action.payload]},
        {pending: false}
      );
    case HeroActions.ADD_HERO_ERROR:
      return Object.assign({}, 
        state, 
        {error: "Hero was not added"},
        {pending: false}
      );

    case HeroActions.DELETE_HERO: 
      return Object.assign({},
        state, 
        {heroes: state.heroes.filter(x => x._id != action.payload._id)},
        {selectedHero: state.selectedHero && state.selectedHero._id == action.payload._id? null: state.selectedHero},
        {pending: true}
      );
    case HeroActions.DELETE_HERO_SUCCESS: 
      return Object.assign({},
        state, 
        {heroes: state.heroes.filter(x => x._id != action.payload._id)},
        {pending: false}
      );
    case HeroActions.DELETE_HERO_ERROR: 
      return Object.assign({},
        state, 
        {heroes: [...heroes, action.payload]}, 
        {error: "Hero was not deleted"},
        {pending: false}
      );
    
    case HeroActions.UPDATE_HERO: 
      return Object.assign({},
          state, 
          {heroes: state.heroes.map(x => {if(x._id == action.payload._id) return action.payload; else  return x;})},
          {selectedHero: null},
          {pending: true}
        );
    case HeroActions.UPDATE_HERO_SUCCESS: 
        return Object.assign({},state, 
          {heroes: state.heroes.map(x => {if(x._id == action.payload._id) return action.payload; else  return x;})}, 
          {selectedHero: null},
          {pending: false}
        );
    case HeroActions.UPDATE_HERO_ERROR: 
        return Object.assign({},
          state, 
          {heroes: [...heroes, action.payload]},
          {selectedHero: null}, 
          {error: "Hero was not updated"},
          {pending: false}
        );

    case HeroActions.SELECT_HERO: 
      return Object.assign({}, 
        state, 
        {selectedHero: action.payload }
      );
    default:
      return state;
  }
}