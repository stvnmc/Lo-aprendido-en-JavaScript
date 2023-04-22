// Separar los numeros pares y impares de este array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 645, 8, 9, 10, 12, 10000]

let pares = []

let impares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    } else {
        impares.push(numeros[i])
    }
}

console.log(`Los numeros pares son ${pares} + '<br>'`)
console.log(`Los numeros pares son ${impares}`)