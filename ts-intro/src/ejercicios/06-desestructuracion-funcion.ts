/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calcularISV(productos: Producto[]): number{
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    });

    return total * 0.15;
}

export function calcularISVv2(productos: Producto[]):[number, number]{
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    });

    return [total, total * 0.15];
}

const articulos: Producto[] = [telefono, tableta];

const isv = calcularISV(articulos);
const [total, isv2] = calcularISVv2(articulos);

// console.log('ISV:', isv);
// console.log('Total:', total);
// console.log('ISV:', isv2);

