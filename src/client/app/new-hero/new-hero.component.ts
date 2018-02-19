import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService }  from '../services/hero.service';
import { HeroesComponent } from '../heroes/heroes.component'

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  heroName: string = '';

  constructor(private heroService: HeroService, private heroesComponent: HeroesComponent) { }

  ngOnInit() {
  }

  add(): void {
    this.heroService.addHero(this.heroName)
      .subscribe(res => this.heroesComponent.getHeroes()); //  todo change this
  }
}
