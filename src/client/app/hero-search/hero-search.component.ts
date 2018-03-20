import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { NgRedux } from '@angular-redux/store';
import { HeroActions } from '../store/hero.actions';
import { IHeroState } from '../store/model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<any[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private ngRedux: NgRedux<IHeroState>,
    private actions: HeroActions,
    private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  onSelect(hero: Hero) {
    this.actions.select(hero);
  }
}
