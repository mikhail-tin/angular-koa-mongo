import 'rxjs/add/operator/switchMap';
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }  from '@angular/common';
import { Hero } from '../models/hero';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState} from '../store/store';
import { HeroActions} from '../store/app.actions'
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: any;
  id: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: HeroActions,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.hero = this.ngRedux.getState().heroes.find(x=> x._id === this.id);
    });
  }

  save(): void {
    this.actions.updateHero(this.hero);
    this.goBack()
  }

  goBack() {
    this.location.back();
  }
}