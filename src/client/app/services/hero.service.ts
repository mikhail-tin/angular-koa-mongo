import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response} from '@angular/http'
import 'rxjs/add/operator/map'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(public http: Http, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).map(res => res.json())
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(_id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero with id: ${_id}`);
    return this.http.get(`${this.heroesUrl}/${_id}`).map(res => res.json())
      .pipe(
        tap(hero => this.log(`fetched hero`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  addHero(name: string): Observable<any> {
    this.messageService.add(`HeroService: add hero with name: ${name}`);
    return this.http.post(this.heroesUrl, name).map(res => res.json())
      .pipe(
        tap(_ => this.log(`add hero name=${name}`)),
        catchError(this.handleError<any>('addHero'))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    this.messageService.add(`HeroService: updat hero with id: ${hero.id}`);
    return this.http.put(this.heroesUrl, hero).map(res => res.json())
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  deleteHero(hero: Hero): Observable<any> {
    this.messageService.add(`HeroService: delet hero with id: ${hero.id}`);
    let id = hero.id;
    return this.http.delete(`${this.heroesUrl}/${id}`).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
};
