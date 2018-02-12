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
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService
  ){}

  ngOnInit() {
    console.log("init going on");
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(res => {
        console.log(JSON.stringify(res));
        this.heroes = res.default;
      });
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
