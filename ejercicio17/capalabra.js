//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

function capitalizar(string) {
let palabra = string.split(" ");
        for (let i = 0; i < palabra.length; i++) {
        palabra[i] = palabra[i].charAt(0).toUpperCase() + palabra[i].slice(1);
    }
  
    return palabra.join(" ");
}
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""