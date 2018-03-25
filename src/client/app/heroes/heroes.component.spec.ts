import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// components
import { HeroesComponent } from './heroes.component';
import { NewHeroComponent } from '../new-hero/new-hero.component';
import { InfoWidgetComponent } from '../info-widget/info-widget.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { mockedRedux } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';
import { Hero } from '../models/hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockedNgRedux;

  beforeEach(async(() => {
    mockedNgRedux = mockedRedux({});
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, NewHeroComponent, InfoWidgetComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, {provide: NgRedux, useValue: mockedNgRedux}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('number of heroes', () => {
    let heroes: Hero[] = [
      {_id: '158138167465', name: 'First Hero'},
      {_id: '563581316745', name: 'Second Hero'}
    ];
    mockedNgRedux.dispatch({type: 'CHANGE', payload: {heroesState: {heroes: heroes}}});
    fixture.detectChanges();
    const count = fixture.debugElement.nativeElement.querySelectorAll('li').length;
    expect(count).toBe(2);
  });

});
