import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWidgetComponent } from './info-widget.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';

describe('InfoWidgetComponent', () => {
  let component: InfoWidgetComponent;
  let fixture: ComponentFixture<InfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWidgetComponent ],
      imports: [NgReduxTestingModule],
      providers: [HeroActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
