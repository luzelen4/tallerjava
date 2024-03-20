// Escribir una función llamada terminanConS que reciba un arreglo de strings y 
//retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula)

function terminanConS(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().endsWith('s'));
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []