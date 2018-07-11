import { Injectable } from '@angular/core';
import Hero from './hero';
import { HeroesList } from './heroes-list';

@Injectable({
  providedIn: 'root'
})
export default class HeroService {

  getHeroes(): Hero[] {
    return HeroesList;
  }

  constructor() { }
}
