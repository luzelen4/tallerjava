

// Para contar el número de asteriscos en un arreglo, 
//puedes usar un bucle para recorrer cada elemento del arreglo y verificar si es un asterisco. 
//Aquí tienes la implementación en JavaScript:


function numAsteriscos(arreglo) {
    let contador = 0;
    for (let elemento of arreglo) {
        if (elemento === '*') {
            contador++;
        }
    }
    return contador;
}
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0