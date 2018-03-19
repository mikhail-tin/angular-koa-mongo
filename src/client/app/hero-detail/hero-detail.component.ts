import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input }  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }  from '@angular/common';
import { Hero } from '../models/hero';
import { NgRedux, select, WithSubStore, PathSelector, ObservableStore} from '@angular-redux/store';
import { IHeroState} from '../store/model';
import { HeroActions} from '../store/app.actions'
import { Observable } from 'rxjs/Observable';
import { heroReducer } from '../store/heroReducer';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: heroReducer,
})
export class HeroDetailComponent implements OnInit {
  private subStore: ObservableStore<IHeroState>;
  hero: any;
  id: string;

  constructor(
    private ngRedux: NgRedux<IHeroState>,
    private actions: HeroActions,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subStore = this.ngRedux.configureSubStore( ['heroesState'], heroReducer);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.hero = this.subStore.getState().heroes.find(x=> x._id === this.id);
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