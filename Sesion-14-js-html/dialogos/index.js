const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    // console.log("click")
    // confirm("Estas de acuerdo?") && console.log("ok")
    // confirm("Estas de acuerdo")
    //     ? console.log("OK")
    //     : console.log("NO!!")

    const repuesta = confirm("Seguro?")
    if (repuesta) {
        console.log("Estas de acuerdo!")
    } else {
        console.log("No estas de acuerdo")
    }
})

const botonInfo = document.querySelector('#info')
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre")
    console.log("Tu nombre es " + nombre)
})


const lista = [{
    nombre: "Gorka",
    edad: 34
},
{
    nombre: "Julen",
    edad: 23
},
{
    nombre: "Amaia",
    edad: 34
}]