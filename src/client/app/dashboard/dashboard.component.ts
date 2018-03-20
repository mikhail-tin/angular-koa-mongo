import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select, WithSubStore, PathSelector} from '@angular-redux/store';
import { IHeroState, IGlobalState} from '../store/model';
import { Router } from '@angular/router';
import { HeroActions } from '../store/hero.actions';
import { heroReducer } from '../store/heroReducer';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  @select(['heroesState', 'heroes']) heroes$: Observable<any[]>;

  constructor(
    private actions: HeroActions,
    private ngRedux: NgRedux<IGlobalState>,
    private router: Router) { }

  ngOnInit(): void {
    this.actions.getHeroes();
   }

  gotoDetail(id: string): void {
     this.router.navigate(['/detail', id]);
  }
}
