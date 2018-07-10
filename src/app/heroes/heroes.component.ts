import { Component, OnInit } from '@angular/core';
import Hero from '../hero';
import { HeroesList } from '../heroes-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HeroesList;

  selectedHero: Hero;

  onSelect(hero: Hero) :void {
    this.selectedHero = hero;
    console.log(hero);
  }

  constructor() { }

  ngOnInit() {

    
  }

}
