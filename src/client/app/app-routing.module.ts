import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'error', component: NotFoundComponent},
  {path: '**',  component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, /*{ enableTracing: true }*/ )
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
