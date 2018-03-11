import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {IAppState,INITIAL_STATE} from './store/store' 
import {rootReducer} from './store/reducer' 
import { createLogger } from 'redux-logger';
// components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NotFoundComponent } from './not-found/not-found.component'
// services
import {HeroService} from './services/hero.service';
import { MessageService } from './services/message.service';
import { HeroActions } from './store/app.actions';
import { createEpicMiddleware } from 'redux-observable';
import { HeroEpics } from './services/hero.epic';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NewHeroComponent,
    HeroSearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    HttpModule,
    NgReduxModule
  ],
  providers: [
    HttpClientModule, 
    HeroService, 
    MessageService,
    HeroActions,
    HeroEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(
    private heroEpics: HeroEpics,
    private ngRedux: NgRedux<IAppState>) {
    
      const middleware = [
        createEpicMiddleware(this.heroEpics.get),
        createLogger()
      ];
      ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware);
  }
}
