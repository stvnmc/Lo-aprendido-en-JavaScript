// import { suma, eleva, nombre } from './matematicas.js'
import * as moduloMatematicas2 from './matematicas2.js' 
import getAutor from './literatura.js';

const sum = moduloMatematicas2.suma(2, 4);
console.log(sum)

const potencia = moduloMatematicas2.eleva(2, 21)
console.log(potencia)


console.log(moduloMatematicas2.nombre)

console.log(getAutor())