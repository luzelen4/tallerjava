//Escribir una función llamada sumarRango que reciba dos argumentos: 
//número inicial y número final. La función debe retornar la suma de los números 
//en ese rango (incluyéndolos).

//Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
// escribe tu respuesta acá


function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }
    return suma;
}

// Pruebas
console.log(sumarRango(0, 10));   // Output: 55
console.log(sumarRango(12, 14));  // Output: 39
console.log(sumarRango(5, 5));    // Output: 5
