// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = [
    {
        nombre: "steve",
        apellido: "marchena",
        edad: "24",
        altura: "1.80",
        eresDesarrollador: true
    }
];

var miEdad = datosPersonales.forEach(valor => {
    console.log(valor.edad)
});

const listaDeAmigos = [
    {
        nombre: "caudio",
        apellido: "prendas",
        edad: "25",
        altura: "1.60",
        eresDesarrollador: false
    },
    {
        nombre: "maria",
        apellido: "gambino",
        edad: "22",
        altura: "1.50",
        eresDesarrollador: true
    }
]

var lista = listaDeAmigos.concat(datosPersonales);
console.log(lista)

lista.sort((b, a) => a.edad - b.edad)
console.log(lista)
