/*
    ===== Código de TypeScript =====
*/
// import { Producto, calcularISVv2 } from './ejercicios/06-desestructuracion-funcion';

import { calcularISVv2, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const [total, isv] = calcularISVv2(carritoCompras);

console.log('Total:', total);
console.log('ISV', isv);



