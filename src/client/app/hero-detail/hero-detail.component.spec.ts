import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// components
import { HeroDetailComponent } from './hero-detail.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { mockedRedux } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockedNgRedux;

  beforeEach(async(() => {
    mockedNgRedux = mockedRedux();
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions,
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: '12345'}) }},
        {provide: NgRedux, useValue: mockedNgRedux}
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
