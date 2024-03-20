// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces 
//que aparece la letra "a":

function numeroDeAes(letra) {
    let contador = 0;
    for (let i = 0; i < letra.length; i++) {
        if (letra[i] === 'a' || letra[i] === 'A') {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0