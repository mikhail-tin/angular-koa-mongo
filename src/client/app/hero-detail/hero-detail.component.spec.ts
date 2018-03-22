import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { HeroActions } from '../store/hero.actions';
import { FormsModule } from '@angular/forms';

import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let subStore = { 
    getState: () => { 
      return {  heroes: [{_id: '123', name: 'Hero1'},{_id: '234', name: 'Hero2'},{_id: '345', name: 'Hero3'}] };
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [NgReduxTestingModule, FormsModule, RouterModule, RouterTestingModule],
      providers: [HeroActions, MockNgRedux, {provide: ActivatedRoute, useValue: { params: Observable.of({id: '123'}) }}
    ]
    })
    .compileComponents();

    spyOn(MockNgRedux.getInstance(), 'configureSubStore').and.returnValue(subStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    

    expect(component).toBeTruthy();
  });
});
