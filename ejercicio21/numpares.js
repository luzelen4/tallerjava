// Escribir una función llamada pares que reciba un arreglo de números y 
//retorne un nuevo arreglo con los números pares únicamente.

function pares(arreglo) {
   
    return arreglo.filter(numero => numero % 2 === 0);
}
console.log(pares([1, 2, 3, 4, 5, 6]));    // Output: [2, 4, 6]
console.log(pares([10, 15, 20, 25]));      // Output: [10, 20]
console.log(pares([-3, -2, -1, 0, 1, 2])); // Output: [-2, 0, 2]
console.log(pares([]));        