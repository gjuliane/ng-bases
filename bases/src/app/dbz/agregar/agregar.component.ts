import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  // @Input('data') personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar = () => {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    // debugger;
    // this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    
    this.nuevo = {
      nombre:'',
      poder:0
    };
    // console.log(this.personajes);
  }

  cambiarNombre = (e: any) => {
    // console.log(e.target.value);
    console.log(this.nuevo);
    
  }

}
