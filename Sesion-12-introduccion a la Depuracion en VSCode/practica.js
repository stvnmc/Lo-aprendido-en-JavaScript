// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 3 2,, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

const persona = {
    n: 6
}

function obtenArray(n) {
    for (let i = 0; i <= 10; i++) {
        let arrayNums = []
        let a = 0;
        let b = 1;
        let c = 0;

        if (num === 1) {
            return 1;
        }
        for (let i = 0; i < n - 1; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        arrayNums = [...arrayNums, n]
        return c;

    }
    return arrayNums
}


console.log(obtenArray)
