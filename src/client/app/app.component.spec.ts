import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { FormsModule } from '@angular/forms';
import { HeroActions } from './store/hero.actions';
import { NgRedux } from '@angular-redux/store';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';
import { IGlobalState } from './store/model';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      declarations: [AppComponent, LoadingIndicatorComponent, NotFoundComponent],
      providers: [HeroActions, {provide: NgRedux, useValue: mockedRedux()}]


    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
