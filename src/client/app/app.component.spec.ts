import { TestBed, async } from '@angular/core/testing';
// components
import { AppComponent } from './app.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { NotFoundComponent } from './not-found/not-found.component';
// necessary staff
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { mockedRedux } from './mocks';
import { FormsModule, RouterModule, RouterTestingModule, NgReduxTestingModule } from './mocks/modulesImport';
import { HeroActions, HeroService, HttpClient, HttpHandler } from './mocks/providersImport';

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
