import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Hero from './hero';
import { HeroesList } from './heroes-list';
import MessageService from './message.service';

@Injectable({
  providedIn: 'root'
})
export default class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Fetched HeroesList');
    return of(HeroesList);
  }

  constructor(private messageService: MessageService) { }
}
