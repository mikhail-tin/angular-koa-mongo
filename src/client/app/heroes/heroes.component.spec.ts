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
