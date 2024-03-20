//bir una función llamada numAsteriscos que reciba una matriz 
//(un arreglo de arreglos) y retorne el número de asteriscos:

function numAsteriscos(matriz) {
    let contador = 0;
    for (let fila of matriz) {
        for (let elemento of fila) {
            if (elemento === '*') {
                contador++;
            }
        }
    }
    return contador;
}
// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5