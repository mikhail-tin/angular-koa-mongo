import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from '../models/hero';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs/Observable';
import {NgRedux, select} from '@angular-redux/store';
import { IAppState} from '../store/store';
import {HeroActions} from '../store/app.actions'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  @select('heroes') heroes$: Observable<any[]>;
  @select('selectedHero') selectedHero$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: HeroActions,
    private heroService: HeroService,
    private router: Router) { }

  

  delete(hero: any): void {
    this.actions.remove(hero);
  }

  ngOnInit(): void {  }

  onSelect(hero: any): void {
    this.actions.select(hero);
  }

  gotoDetail(hero: any): void {
    this.router.navigate(['/detail', hero.id]);
  }
}
