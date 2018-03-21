import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroComponent } from './new-hero.component';
import { HeroActions } from '../store/hero.actions';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'new-hero',
  template: 'Mock New Hero',
})
class MockNewHeroComponent {
  @Input() heroName = 'new hero';
};

describe('NewHeroComponent', () => {
  let component: NewHeroComponent;
  let fixture: ComponentFixture<NewHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeroComponent, MockNewHeroComponent ],
      imports: [NgReduxTestingModule, FormsModule],
      providers: [HeroActions],
    })
    .compileComponents();

    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
