// Que son las funciones, como se declaran y como se utilizan
//las funciones son bloques de codigo que se ejecutan con un fin especifico

saludar("Steve")

function saludar(nombre) {
    console.log(`hola ${nombre}`)
}

////


let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adios ${nombre}`)
}

////

let persona = { nombre: "Juan", apellido: "Gonzalez" }

saludarPersona(persona)

function saludarPersona(objeto) {
    objeto.apellido = "villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()


////



function imprimeNumero(numero = 7) { // Parametros por defecto
    console.log(numero)
}

imprimeNumero()

///////
function imprimer(...parametros) {
    console.log(parametros)
}

imprimer(1, 2, 3, 4, "hola", { id: 9 })

///// si queremos que una funcion devuelva algo tiene que tener return

function suma(...nums) {
    console.log(...nums)
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4)

console.log(s)

////

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios";
    return a * b
}

console.log(variable_interna)

console.log(multiplicar(4, 9))