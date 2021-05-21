import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 700
    },
    {
      nombre: 'Goku',
      poder: 15000
    }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje = (event: Personaje) => {
    console.log('Main page Component');
    console.log(event);
    this.personajes.push(event);
  }

  constructor(private DbzService: DbzService) {
    
  }

}
