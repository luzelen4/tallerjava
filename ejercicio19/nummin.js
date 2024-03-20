// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(arreglo) {
    if (arreglo.length === 0) {
        return undefined; 
    }
    
    let minimo = arreglo[0]; 
    
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i]; 
        }
    }
    
    return minimo;
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2