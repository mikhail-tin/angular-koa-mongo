import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';
import { NewHeroComponent } from '../new-hero/new-hero.component';
import { InfoWidgetComponent } from '../info-widget/info-widget.component';
import { RootStore } from "@angular-redux/store/lib/src/components/root-store";
import { IGlobalState } from "../store/model";
import { NgZone } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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
  
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, NewHeroComponent, InfoWidgetComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, {provide: NgRedux, useValue: mockedRedux()}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
