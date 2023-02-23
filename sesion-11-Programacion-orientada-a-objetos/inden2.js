// Ambito de las clases, metodos y atributos publicos, privados y protegidos

class Persona {
    // Private -> #
   // Private -> Solo se puede accerder desde dentro de la clase
    #nombre
    #edad
    #isDeveloper

    // Protected -> _
    //Protected  ->Solo se puede acceder desde dentro de la clase y desde clases  descendientes
    _isDeveloper = true

    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre
        this.#edad = edad
        this.#isDeveloper = isDeveloper
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    obtenNombre() {//Funcion getter -> Nos permite accerder (de forma controlada) a algun atributo  protegido
        return this.#nombre
    }
    #obtenEdad() {
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Gorka", 70, true)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.isDeveloper)
// persona.saludo()
// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())

// persona.nombre = "Adios"
// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.isDeveloper)
// persona.saludo()
// console.log(persona.obtenNombre())

// Getters y Setters en objetos

// Getter - > metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter - > metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
persona.setEdad(34)
console.log(persona.getEdad())