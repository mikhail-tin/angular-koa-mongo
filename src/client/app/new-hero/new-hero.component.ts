import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { NgRedux } from '@angular-redux/store';
import { IHeroState } from '../store/model';
import { HeroActions } from '../store/app.actions';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  heroName: string = '';

  constructor(
    private ngRedux: NgRedux<IHeroState>,
    private actions: HeroActions) { }

  ngOnInit() {
  }

  add(name: string): void {
    if (!name.trim()) { return; }
    this.actions.addHero({_id: null, name: name.trim()});
    this.heroName = "";
  }
}
