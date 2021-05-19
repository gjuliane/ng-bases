import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-contador',
        template: `
        <h2>{{titulo}}</h2>

        <button (click)=" numero = numero + 1;">+ 1</button>
        <button (click)="sumar();">sumar</button>

        <span>{{ numero }}</span>
        <button (click)="restar();">restar</button>
        <button (click)="numero = numero - 1;">- 1</button>
        <hr>
        <button (click)="acumular(1);">Acum +1</button>
        <button (click)="acumular(-1);">Acum -1</button>

        <h2> Base V1</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="aumentarBase('agregar');">Agregar base</button>
        <span>{{numero}}</span>
        <button (click)="aumentarBase('quitar');">Quitar base</button>
        <hr>
        <h2> Base V1</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumularBaseV2(base);">Agregar base</button>
        <span>{{numero}}</span>
        <button (click)="acumularBaseV2(base);">Quitar base</button>
        `
    }
)
export class ContadorComponent{
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