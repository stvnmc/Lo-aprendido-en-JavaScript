// length , este metodo string muestra la cantidad de espacios que un string
let a = 'hola'
console.log(a.length)

// indexOf ,  search muesta en que posision esta una palabra en un string
console.log(indexOf(o))

// lastIndexO muesta en que posision esta una palabra en un string comenzando por el ultimo
console.log(lastIndexOf(o))

// concat, se utiliza para concatenar dos valiables como +
let b = "como estas"
console.log(a.concat(b))


//  toLowerCase se utiliza para poner un string en minuscula
let e = "COMO ESTAS"
console.log(e.toLowerCase())


// toUpperCase se utiliza para poner un string en mayusculas
let m = "hola como estas "
console.log(m.toUpperCase())

// match se utiliza para encontrar un serie de palbras en un string
let g = "hola como estas "
console.log(m.match("como"))

//  Substr muestra las palabras que se encuentra entre los index que coloquemos
let h = "    hola buenas estas?"
console.log(h.substr(3, 6))

//  charAt devuelve la letra del index que le demos
console.log(h.charAt(6))

//  startsWith devuleve true o false si el texto comienza con el valor que le doy 
console.log(h.startsWith("hola"))

//  endsWith devuleve true o false si el texto termina con el valor que le doy
console.log(h.startsWith("estas?"))

// includes se utliza para saber si una palabra esta en el texto retornando true o false
console.log(h.includes("hola", 0))

//  repeat se utiliza para repetir un numero de veces un string
console.log(h.repeat(2))

// replace se utliza para remplazar palabras de un string
console.log(h.replace("hola", "muy buenas"))

// slice obvia todo lo que esta antes del indice que coloquemos
console.log(h.slice(3))

// trim elimina los espacios el principio de string
console.log(h.trim())

// Split trasforma un string en un array
let dias = "lunes, martes, miercoles, jueves, viernes, sabado, domingo"
console.log(dias.split(', '))

