// trabajando con objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalo",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

const prop = "isDeveloper"
console.log(obj[prop])

// 
const obj2 = obj;
console.log(obj2)

// // cambia el valor del primer obj
// asigna la misma direccion de memoria

obj2.nombre = "hola"

console.log(obj2.nombre)
console.log(obj.nombre)

// no cambia el objto

let val1 = 4
let val2 = 5
console.log(val1)
console.log(val2)

const obj3 = { ...obj }
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "gorka"
console.log(obj.nombre)
console.log(obj3.nombre)

// como ordernar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    { titulo: "lo que el viendo se llevo", anyo: 1939 },
    { titulo: "titanic", anyo: 1997 },
    { titulo: "moana", anyo: 2016 },
    { titulo: "el efecto mariposa", anyo: 2004 },
    { titulo: "el efecto mariposa", anyo: 2004 }
]

console.log(listaPeliculas);

// .sort() -> MUTA EL VALOR DE LA LISTA ORGINAL
// se puede ordernar por titulo

listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)