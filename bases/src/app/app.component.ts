import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls:   'app.component.css'
})
export class AppComponent {
  public titulo: string = 'Contador App';
  public numero: number =  10;
  public base: number = 5;

  sumar() {
    this.numero +=1;
  }
  restar = () => {
    this.numero -=1;
  }

  acumular(valor:number){
    this.numero += 1;
  }

  aumentarBase = (operacion:string) => {
    if ('agregar') {
      this.numero += this.base;
    }
    else {
      this.numero -= this.base;
    }
  }

  acumularBaseV2 = (base: number) => {
    this.numero += base;
  }
}
