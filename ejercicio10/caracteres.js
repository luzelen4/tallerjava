// Escribir una función llamada numeroDeCaracteres que reciba un string y 
//un caracter (un string de un caracter). La función debe retornar el número de veces 
//que aparece el caracter en el string.

function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("banana", "a"));   // Output: 3
console.log(numeroDeCaracteres("Abracadabra", "a"));   // Output: 4
console.log(numeroDeCaracteres("Elephant", "e"));   // Output: 2
console.log(numeroDeCaracteres("", "x"));   // Output: 0