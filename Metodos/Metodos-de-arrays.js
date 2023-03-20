// Metodos de arrays

let numeros = [1, 4, 3, 5, 6]

// length : se utiliza para saber el numero de array
console.log(numeros.length)

// push() : se utiliza para agragar un nuevo elemento al array a la parte final
numeros.push(5)

// pop() : se utiliza para eleminar el ultimo elemento del array
numeros.pop()

// unshift() : se utliza para agregar un elemento al comienzo del array
numeros.unshift(9)

// shift() : se utiliza para eliminar el primer elemento de un array
numeros.shift()

// join() : se utiliza para cambiar de un array a un string
let numerosjoin = numeros.join(', ')
console.log(numerosjoin)

// toString() : se utiliza para cambiar de un array a un string
let numerostostring = numeros.toString()
console.log(numerostostring)

// filter() : se utiliza para buscar considencias
let numerosfilter = numeros.filter(numeros => numeros > 4)
console.log(numerosfilter)

// find() : se utiliza para buscar considencias pero devuelve el primero que encuentre
let numerosfind = numeros.filter(numeros => numeros > 4)
console.log(numerosfind)

// map() : se utiliza para recorer el array y devuelve un nuevo array
let numerosmap = numeros.map(numeros => numeros + 4)
console.log(numerosmap)

// forEach() : se utiliza para recorer el array no devuelve un array solo los modifica
numeros.forEach(numeros => {
    return console.log(numeros + 1)
})

// some() : se utiliza para que devuelva un true o false dependiendo de una condicion
let numerosSome = numeros.some(numeros => numeros > 3)
console.log(numerosSome)

// every() : se utiliza para que devuelva un true o false dependiendo de una condicion pero con todos los elementos del array
let numerosEvery = numeros.every(numeros => numeros > 3)
console.log(numerosEvery)

// concat() : se utiliza para unir dos arrays
let numeros3 = [3, 4, 9]
console.log(numeros.concat(numeros3))

// sort() : se utiliza para ordernar de forma desendente o asendente
let numeroSort = numeros.sort((a, b) => a > b ? -1 : 1) // 1 : -1
console.log(numeroSort)

// includes() : se utiliza para saber si el array contiene ese valor
let numeroIncludes = numeros.includes(2)
console.log(numeroIncludes)

// indexOf() : se utiliza para devolver la posision del primer elemento en el array
let numeroIndexOf = numeros.indexOf(3)
console.log(numeroIndexOf)

// lastIndexOf() : se utiliza para devolver la posision del ultimo elemento en el array
let numerolastIndexOf = numeros.lastIndexOf(3)
console.log(numerolastIndexOf)

// findIndex() : se utiliza para devolver un index con unas condisiones y si no culpe las condicion devuelve -1 
let numerofindIndex = numeros.findIndex(numero => numero === 3)
console.log(numerofindIndex)

// reverse() : se utiliza para darle la vuelta al array alreves
let numeroReverse = numeros.reverse()
console.log(numeroReverse)


// split() : se utiliza para devolver el array con el primer espacio es donde comienza el nueno array con el segundo termina
//el array y no lo muestra, el terce es para agregar un nuevo elemento al array
let numeroSplit = numeros.splice(2, 5, 'Hola')
console.log(numeroSplit)

// flact() : se utiliza para que un array con sub arrray se convierta en un mismo array
let numeros4 = [33, 65, 12, [1, 2, 34,]]
let numeroFlact = numeros4.flat()
console.log(numeroFlact)

// toString() : se utiliza para combertir un array en un string
let numeroToString = numeros4.toString()
console.log(numeroToString)

// reduce() : se utiliza para sumar todos los numeros en un array 
let numeroReduce = numeros4.reduce((acumulador, valor) =>{
    return acumulador + valor
})
console.log(numeroReduce)


// Existen mucho mas, estos son los mas importante