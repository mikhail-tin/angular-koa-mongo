import { Action } from 'redux';
import { Hero } from '../models/hero';
import {AnyAction} from './app.actions';
import { IAppState } from './store';
import {HeroActions} from './app.actions';


export function rootReducer(lastState: IAppState, action: AnyAction): IAppState {
  switch(action.type) {

    case HeroActions.GET:
      return Object.assign({},lastState, {heroes: action.payload});
    case HeroActions.GET_SUCCESS:
      return Object.assign({}, lastState, {heroes: action.payload});
    case HeroActions.GET_ERROR:
      return Object.assign({}, lastState, {heroes: []}, {error: "Heroes was not fetched"});


    case HeroActions.ADD:
      let nextId = lastState.heroes.length + 1; 
      return Object.assign({}, lastState, {heroes: [...lastState.heroes, {id: null, name: action.payload.name}]});
    case HeroActions.ADD_SUCCESS:
      let heroes = lastState.heroes.filter(x=> !!x.id);
      return Object.assign({}, lastState, {heroes: [...heroes, action.payload]});
    case HeroActions.ADD_ERROR:
      return Object.assign({}, lastState, {error: "Heroe was not added"});


    case HeroActions.REMOVE: 
      return Object.assign({},lastState, {heroes: lastState.heroes.filter(x => x.id != action.payload.id)});
    
    case HeroActions.UPDATE: 
      return Object.assign({},lastState, 
        {heroes: lastState.heroes.map(x => {if(x.id == action.payload.id) return action.payload; else  return x;})});
    
    case HeroActions.SELECT: 
      return Object.assign({}, lastState, { selectedHero: action.payload });

  }

  return lastState;
}