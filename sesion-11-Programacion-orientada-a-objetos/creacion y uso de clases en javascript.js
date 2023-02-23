// creacion y uso de clases en javascript.js


class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDevelopers
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre},tengo ${this.edad} años.`)

    }
}


// const nueva_persona = new Persona("jorje", 34, true)
// console.log(nueva_persona.saludo)
// console.log(Persona.saludo())

let numero = 60 //inicializar
console.log(typeof numero)

let persona_2 = new Persona("Maria", 34, false)//instaciar
console.log(typeof persona_2)
console(persona_2 instanceof Persona)

// instanceof -> similiar a typeof pero para clases