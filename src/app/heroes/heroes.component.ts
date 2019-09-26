import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

// Estilos y vistas que pertenecen al componente
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Oscar Galvez'
  };

  constructor() { }

  ngOnInit() {
  }

}
