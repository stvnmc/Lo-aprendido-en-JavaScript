const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo numero")
}

const elDoble = miFuncion("ala")


//const elDoble = miFuncon("ala")
const numero = "8"

try {
    //Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
}catch(e){
    //En caso de fallar, quiero ejectes
    console.error(`El valor de e es :${e}`)
    console.error("ERROR")
} finally{
    console.log("Esto se va a ejecutar tanto si se produce algun erro,como si no existe ninguno")
}

//  InternalError, SyntaxError, TypeError, RangeError y ReferenceError
