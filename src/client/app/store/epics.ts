import { Injectable } from '@angular/core';
import { HeroEpics } from '../services/hero.epic';

@Injectable()
export class RootEpics {
  constructor() {}

  public createEpics() {
    return [
      HeroEpics
    ];
  }
}