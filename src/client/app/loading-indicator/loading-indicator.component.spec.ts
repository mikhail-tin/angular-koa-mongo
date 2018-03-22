import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// components
import { LoadingIndicatorComponent } from './loading-indicator.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { mockedRedux, extState } from '../mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from '../mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from '../mocks/providersImport';
import { Observable } from 'rxjs/Observable';

describe('LoadingIndicatorComponent(pending)', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;
  let mockedNgRedux = mockedRedux({heroesState: {pending: true}})

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingIndicatorComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, {provide: NgRedux, useValue: mockedNgRedux}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('indicator is visible', () => {
    mockedNgRedux.dispatch({type: 'CHANGE', payload: {heroesState: {pending: true}}})
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('indicator is non visible', () => {
    mockedNgRedux.dispatch({type: 'CHANGE', payload: {heroesState: {pending: false}}})
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeFalsy()
  });
});
