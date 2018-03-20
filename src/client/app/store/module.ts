import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';
import { IHeroState, IGlobalState, INITIAL_STATE } from './model';
import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import { createEpicMiddleware } from 'redux-observable';
import { HeroEpics } from '../services/hero.epic';


@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics, NgReduxRouter],
})
export class StoreModule {
  constructor(
        public store: NgRedux<IGlobalState>,
        ngReduxRouter: NgReduxRouter,
        private heroEpics: HeroEpics,
        rootEpics: RootEpics) {
    
    const middleware = [
        createEpicMiddleware(this.heroEpics.getHero),
        createEpicMiddleware(this.heroEpics.addHero),
        createEpicMiddleware(this.heroEpics.deleteHero),
        createEpicMiddleware(this.heroEpics.updateHero),
        createLogger()
    ];

    store.configureStore(rootReducer, INITIAL_STATE, middleware);

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    provideReduxForms(store);
  }
}