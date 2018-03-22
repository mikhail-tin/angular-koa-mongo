import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgRedux } from '@angular-redux/store';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';
import { IGlobalState } from '../store/model';

export function mockedRedux(): RootStore<any> {
  const state: IGlobalState = {
    heroesState: {
        heroes: [{_id: '12345', name: 'Hero1'},{_id: '23456', name: 'Hero2'},{_id: '345678', name: 'Hero3'}],
        pending: false,error: null, newHero: null, selectedHero: {_id: '23456', name: 'Hero2'},hero: null,filterHero: '' 
    },
    routerReducer: null
  }
  let result = new RootStore(new NgZone({}))
  result.configureStore((s,a) => s, state);
  return result;
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, MockNgRedux, 
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: '12345'}) }},
        {provide: NgRedux, useValue: mockedRedux()}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
