import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState} from '../store/store';
import { Router } from '@angular/router';
import { HeroActions } from '../store/app.actions';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  @select('heroes') heroes$: Observable<any[]>;

  constructor(
    private actions: HeroActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router) { }

  ngOnInit(): void { 
    this.actions.getHeroes();
   }

  gotoDetail(id): void {
    this.router.navigate(['/detail', id]);
  }
}