import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { StoreModule } from './store/module';
import { createLogger } from 'redux-logger';
// components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
// services
import {HeroService} from './services/hero.service';
import { HeroActions } from './store/hero.actions';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { HeroEpics } from './services/hero.epic';
import { InfoWidgetComponent } from './info-widget/info-widget.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    NewHeroComponent,
    HeroSearchComponent,
    NotFoundComponent,
    InfoWidgetComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule,
  ],
  providers: [
    HttpClientModule,
    HeroService,
    HeroActions,
    HeroEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
