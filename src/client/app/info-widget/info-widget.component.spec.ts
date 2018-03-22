import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// components
import { InfoWidgetComponent } from './info-widget.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { mockedRedux } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';

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
