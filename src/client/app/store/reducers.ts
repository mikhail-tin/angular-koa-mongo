import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { heroReducer } from './heroReducer';
import { IHeroState, IGlobalStore } from './model';

export const rootReducer = combineReducers<IGlobalStore>({
    heroesState: heroReducer,
    routerReducer
  });