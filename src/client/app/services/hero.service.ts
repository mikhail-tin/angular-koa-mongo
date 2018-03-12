import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Hero } from '../models/hero';
import { environment } from '../../environments/environment';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host: string;
  private api: string;

  constructor(private http: HttpClient) {
    this.host = environment.host;
    this.api = environment.heroesApi;
   }

  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}${this.api}`)
      .pipe(tap(_ => {}), catchError(this.handleError('getHeroes', [])));
  }

  getHero(_id: number): Observable<any> {
    return this.http.get(`${this.host}${this.api}/${_id}`)
      .pipe(tap(_ => {}), catchError(this.handleError('getHeroes', [])));
  }

  searchHeroes(term: string): Observable<any[]> {
    if (!term.trim()) { return of([]); }
    return this.http.get<any[]>(`${this.host}${this.api}/?name=${term}`)
    .pipe(tap(_ => {}), catchError(this.handleError<any[]>('searchHeroes', [])));
  }

  addHero(name: string): Observable<any> {
    return this.http.post(`${this.host}${this.api}`, name)
      .pipe(tap(_ => {}), catchError(this.handleError<any>('addHero')));
  }

  updateHero(hero: any): Observable<any> {
    return this.http.put(`${this.host}${this.api}`, hero)
      .pipe(tap(_ => {}),catchError(this.handleError<any>('updateHero')));
  }

  deleteHero(hero: any): Observable<any> {
    let id = hero.id;
    return this.http.delete(`${this.host}${this.api}/${id}`)
      .pipe(tap(_ => {}), catchError(this.handleError<any>('deleteHero')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}