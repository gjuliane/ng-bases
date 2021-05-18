/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Downtown';

console.table(personaje);