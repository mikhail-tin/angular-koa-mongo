import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IGlobalState } from './store/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  @select(['heroesState', 'error']) error$: Observable<any[]>;
  
  constructor(private ngRedux: NgRedux<IGlobalState>,private router: Router) { }

  ngOnInit() {
    this.error$.subscribe(val => {
      if(val) {
        this.router.navigate(['/error'])
      }
    })
  }

}