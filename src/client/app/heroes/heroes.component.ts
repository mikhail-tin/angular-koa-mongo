import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ){}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(res => {
        this.heroes = res.default;
      });
  }
}
