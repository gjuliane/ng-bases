/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// const {volumen, segundo, cancion, detalles } = reproductor;
// const {autor} = detalles;
const autor = 'otro individuo';
const {volumen, segundo, cancion, detalles:{autor: autorDetalle} } = reproductor;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El canción actual de: ', cancion);
console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const[goku, vegeta, trunks] = dbz;
const[, , trunksx] = dbz;

console.log('Personaje 1', dbz[0]);
console.log('Personaje 2', dbz[1]);
console.log('Personaje 3', dbz[2]);
console.log('Personaje 1', goku);
console.log('Personaje 2', vegeta);
console.log('Personaje 3', trunks);
console.log('Personaje 3', trunksx);
