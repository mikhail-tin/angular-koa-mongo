import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {

  private heroes$: Observable<any[]>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.heroes$ = this.ngRedux.select('heroes');
  }
}
