import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
// components
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { mockedRedux } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';
import { Hero } from '../models/hero';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockedNgRedux;

  beforeEach(async(() => {
    mockedNgRedux = mockedRedux();
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HeroSearchComponent ],
      imports: [NgReduxTestingModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, HeroService, HttpClient, HttpHandler,
        {provide: NgRedux, useValue: mockedNgRedux}
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

  it('number of heroes always is 5', () => {
    let heroes: Hero[] = [
      {_id: '158138167465', name: "First Hero"},
      {_id: '563581316745', name: "Second Hero"},
      {_id: '158138167465', name: "Third Hero"},
      {_id: '563581316745', name: "Fourth Hero"},
      {_id: '158138167465', name: "Fifth Hero"},
      {_id: '563581316745', name: "Sixth Hero"}
    ];
    mockedNgRedux.dispatch({type: 'CHANGE', payload: {heroesState: {heroes: heroes}}});
    fixture.detectChanges();
    const count = fixture.debugElement.nativeElement.querySelectorAll('.hero').length;
    expect(count).toBe(5)
  });
});
