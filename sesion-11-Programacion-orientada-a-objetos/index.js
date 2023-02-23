const persona = {
    nombre: "GOrka",
    edad: 34,
    isDeveloper: true,
    saludo: function () {
        console.log('hola')
    }
}

// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function () {
        console.log('hola')
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,// nombre: nombre
        edad,
        isDeveloper,
        saludo: function () {
            console.log('hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)

console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria",45, false)

console.log(nueva_persona_2)