// Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) 
//y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.


function numerosAPalabras(arreglo) {
    return arreglo.map(numero => numeroEnPalabras(numero));
}

function numeroEnPalabras(numero) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    

    if (numero < 10) {
        return unidades[numero];
       }
}
// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]