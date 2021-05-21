import { Component, Inject, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  @Input('data') personajes: Personaje[] = [];
  
  // get personajesx () {
  //   return this._service.personajes;
  // }

  constructor(private dbzService: DbzService){

  }

}
