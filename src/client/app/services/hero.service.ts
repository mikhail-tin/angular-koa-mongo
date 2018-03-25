import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Hero } from '../models/hero';
import { environment } from '../../environments/environment';

@Injectable()
export class HeroService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private host: string;
  private api: string;

  constructor(private http: HttpClient) {
    this.host = environment.host;
    this.api = environment.heroesApi;
   }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.host}${this.api}`);
  }

  getHero(_id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.host}${this.api}/${_id}`);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) { return of([]); }
    return this.http.get<Hero[]>(`${this.host}${this.api}/?name=${term}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.host}${this.api}`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.host}${this.api}`, hero);
  }

  deleteHero(hero: Hero): Observable<any> {
    return this.http.delete(`${this.host}${this.api}/${hero._id}`);
  }
}
