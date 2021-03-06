import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from '../models/hero';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select} from '@angular-redux/store';
import { IHeroState } from '../store/model';
import { HeroActions } from '../store/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @select(['heroesState', 'heroes']) heroes$: Observable<Hero[]>;
  @select(['heroesState', 'selectedHero']) selectedHero$: Observable<Hero>;

  constructor(
    private ngRedux: NgRedux<IHeroState>,
    private actions: HeroActions,
    private router: Router) { }

  ngOnInit(): void {
    this.actions.getHeroes();
   }

  onSelect(hero: any): void {
    this.actions.select(hero);
  }

  delete(hero: any): void {
    this.actions.deleteHero(hero);
  }

  gotoDetail(hero: any): void {
    this.router.navigate(['/detail', hero._id]);
  }
}
