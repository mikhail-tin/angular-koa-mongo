import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IGlobalState } from '../store/model';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  @select(['heroesState', 'error']) error$: Observable<any[]>;

  constructor(private ngRedux: NgRedux<IGlobalState>) { }

  ngOnInit() {
  }

}
