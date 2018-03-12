import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService }  from '../services/hero.service';
import { HeroesComponent } from '../heroes/heroes.component'
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { HeroActions } from '../store/app.actions';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  heroName: string = '';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: HeroActions,
    private heroService: HeroService, 
    private heroesComponent: HeroesComponent) { }

  ngOnInit() {
  }

  add(name: string): void {
    if (!name.trim()) { return; }
    this.actions.addHero({id: null, name: name.trim()});
  }
}
