//Escribir una función llamada empiezanConA que reciba un arreglo de strings y 
//retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

function empiezanConA(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().startsWith('a'));
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []