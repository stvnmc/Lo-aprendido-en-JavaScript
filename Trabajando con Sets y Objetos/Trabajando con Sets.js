// sets o conjuntos
// con sets no va a ver valores repetidos
const array = [1,2,3,4,5,5,6,7,2,5,"hola",{id:5},{id:5},"hola"]

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()

miSet.add(9)
console.log(miSet)
miSet.add(10)

// .delete()

miSet.delete("hola")
console.log(miSet)

// .clear()
// miSet.clear()
// console.log(miSet)

// has()
// console.log(array.includes(2))
console.log(miSet.has(40));

// .size
console.log(miSet.size)

miSet.array.forEach(valor => {
    console.log(valor)
});

// obtener valores del set

const itMiSet = miSet.values()
console.log(itMiSet)

// convertir de nuevo a array

const arMiSet = [...miSet]
console.log(arMiSet)
