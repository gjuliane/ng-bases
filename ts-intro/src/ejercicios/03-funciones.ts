/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumbero?: number, base: number = 2): number{
    return numero * base;
}


// const resultado = sumar(10,20);
// const resultado = multiplicar(5, 0, 10);
// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX): void {
    personaje.pv += curarX;
    console.table(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();

