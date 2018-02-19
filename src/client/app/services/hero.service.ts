import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Hero } from '../models/hero';
import { MessageService} from './message.service';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .map(res => res) // todo remove it? 
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(_id: number): Observable<any> {
    return this.http.get(`${this.heroesUrl}/${_id}`)
      .map(res => res) // todo remove it? 
      .pipe(
        tap(hero => this.log(`fetched hero`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) { return of([]); }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
    .pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  addHero(name: string): Observable<any> {
    return this.http.post(this.heroesUrl, name)
      .map(res => res) // todo remove it? 
      .pipe(
        tap(_ => this.log(`add hero name=${name}`)),
        catchError(this.handleError<any>('addHero'))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero)
      .map(res => res) // todo remove it? 
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  deleteHero(hero: Hero): Observable<any> {
    let id = hero.id;
    return this.http.delete(`${this.heroesUrl}/${id}`)
      .pipe(
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
}