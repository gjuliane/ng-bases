/*
    ===== Código de TypeScript =====
*/
// import { Producto, calcularISVv2 } from './ejercicios/06-desestructuracion-funcion';
// Diferencia entre Class e Interface
/* EJEMPLO 1 */
// class Heroe {
//     private alterEgo: string;
//     public edad: number;
//     static nombreReal: number;
//     imprimirNombre(){
//         // return this.alterEgo +' '+ this.nombreReal;
//         return this.alterEgo;
//     }
// }
/* EJEMPLO CLASE E INTERFASE */
// interface Personaje2 {
//     alterEgo: string;
//     edad?: number;
//     nombreReal?: number;
//     imprimirNombre:()=>{}
// }

// const ironman = new Heroe();
// // const spiderman: Personaje2 = {};
// console.log(ironman);

/* EJEMPLO CLASE CON PROPIEDADES */
// class Heroe {
//     // public alterEgo: string;
//     // public edad: number;
//     // public nombreReal: string;
//     constructor (
//         public alterEgo: string,
//         public edad?: number,
//         public nombreReal?: string
//     ){
//         console.log('Hey!');
//         this.alterEgo = alterEgo;
//     }
// }

// const ironman = new Heroe('Ironman', 45, 'Tony');
// console.log(ironman);


/* */
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal{
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'New York, USA');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);