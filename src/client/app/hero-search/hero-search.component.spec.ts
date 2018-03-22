import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// components
import { HeroSearchComponent } from './hero-search.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { mockedRedux } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, HeroService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
