// Trabajando con fechas
const fecha = new Date()

console.log(fecha)

// Los meses inicializan en 0 (0 - enero, 11 - diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 193)
console.log(fecha2)

const fecha3 = new Date(-10000000000000)//milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha3)

// como comparar un fecha posteriror 
console.log(fecha < fecha2)


const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 193)
console.log(fecha5)

console.log(fecha2 === fecha5)//ERROR

console.log(fecha2.getTime() === fecha2.getTime())// OK

//como obtener el dia, mes ,anyo de un fecha

//Obtener el dia  .getDate()
console.log(fecha2.getDate())

//Obtener el mes .getMonth() (0 - Enero,11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

//como mostrar un fecha en un string
// .toLacaleDateString
console.log(fecha2.toLocaleDateString("en-GB"))