import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';
import { IHeroState } from '../store/model';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {

  private heroes$: Observable<any[]>;

  constructor(private ngRedux: NgRedux<IHeroState>) { }

  ngOnInit() {
    this.heroes$ = this.ngRedux.select(['heroesState', 'heroes']);
  }
}
