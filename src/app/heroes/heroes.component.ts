import { Component, OnInit } from '@angular/core';
import { HeroesList } from '../heroes-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HeroesList;

  constructor() { }

  ngOnInit() {

    
  }

}
