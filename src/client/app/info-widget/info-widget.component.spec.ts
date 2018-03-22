import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoWidgetComponent } from './info-widget.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';
import { IGlobalState } from '../store/model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgRedux } from '@angular-redux/store';

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

describe('InfoWidgetComponent', () => {
  let component: InfoWidgetComponent;
  let fixture: ComponentFixture<InfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWidgetComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, {provide: NgRedux, useValue: mockedRedux()}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
