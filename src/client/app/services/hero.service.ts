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
    return this.http.get<any[]>(`${this.host}${this.api}`);
  }

  getHero(_id: number): Observable<any> {
    return this.http.get(`${this.host}${this.api}/${_id}`);
  }

  searchHeroes(term: string): Observable<any[]> {
    if (!term.trim()) { return of([]); }
    return this.http.get<any[]>(`${this.host}${this.api}/?name=${term}`);
  }

  addHero(name: string): Observable<any> {
    return this.http.post(`${this.host}${this.api}`, name);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.host}${this.api}`, hero);
  }

  deleteHero(hero: Hero): Observable<any> {
    return this.http.delete(`${this.host}${this.api}/${hero._id}`);
  }
}