import { HttpClient, HttpHandler } from '@angular/common/http';

import { HeroActions } from '../store/hero.actions';
import { HeroService } from '../services/hero.service';


export {
    // external
    HttpClient,
    HttpHandler,
    // internal
    HeroActions,
    HeroService
};
