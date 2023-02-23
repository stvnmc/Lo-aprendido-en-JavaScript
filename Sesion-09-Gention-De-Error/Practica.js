// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch



try {
    console.log(error)
    console.log("Esta ejecutandose de manera correcta")
} catch (e) {
    console.error(`El valor de e es :${e}`)
    console.error("ERROR")
}


const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
logger.error("Esto es un error")