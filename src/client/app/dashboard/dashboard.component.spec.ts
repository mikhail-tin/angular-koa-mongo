import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { Component, Input, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../services/hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { RootStore } from "@angular-redux/store/lib/src/components/root-store";
import { IGlobalState } from "../store/model";

export function mockedRedux(): RootStore<any> {
    const state: IGlobalState = {
      heroesState: {
          heroes: [{_id: '12345', name: 'Hero1'},{_id: '23456', name: 'Hero2'},{_id: '345678', name: 'Hero3'}],
          pending: false,error: null, newHero: null, selectedHero: null,hero: null,filterHero: '' 
      },
      routerReducer: null
    }
    let result = new RootStore(new NgZone({}))
    result.configureStore((s,a) => s, state);
    return result;
  }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HeroSearchComponent ],
      imports: [NgReduxTestingModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, HeroService, HttpClient, HttpHandler, 
        {provide: NgRedux, useValue: mockedRedux()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
