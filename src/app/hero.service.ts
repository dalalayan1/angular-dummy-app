import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Hero from './hero';
import { HeroesList } from './heroes-list';

@Injectable({
  providedIn: 'root'
})
export default class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HeroesList);
  }

  constructor() { }
}
