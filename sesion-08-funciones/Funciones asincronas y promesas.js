// funciones asincronas

function miAsinc() {
    // Hace una llamada a un base de datos externa
    // puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // si esta todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
});

miPromesa
    .then(() => console.log("se a ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("yo me ejecuto siempre"))