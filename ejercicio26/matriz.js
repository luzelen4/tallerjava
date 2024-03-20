
// Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) 
// e imprima todos los elementos del arreglo.

function imprimirMatriz(matriz) {
    for (let fila of matriz) {
        for (let elemento of fila) {
            console.log(elemento);
        }
    }
}

// código de prueba
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))