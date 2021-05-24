import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = 'mx';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar = (termino: string) => {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        console.log('Error');
        console.info(err);
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias = (termino: string) => {
    // TODO: crear sugerencias
    this.hayError = false;
  }

}
