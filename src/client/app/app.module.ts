import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule, XHRBackend } from '@angular/http';
import {HeroService} from './services/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, HttpModule
  ],
  providers: [HttpClientModule, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
