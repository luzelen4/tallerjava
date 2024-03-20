// Escribir una función llamada duplicar que reciba un arreglo de números 
// y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(arreglo) {
    return arreglo.map(numero => numero * 2);
}


// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []