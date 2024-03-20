function likes(numero) {
    var resultado=0;
    if (numero < 1000) {
        return numero.toString(); // Si el número es menor a 1000, devolver el número como string
    } else if (numero < 1000000) {
        resultado=(numero / 1000)
        
        return Math.floor(resultado) + 'K'; // Convertir a K para miles
    } else {
        resultado= (numero / 1000000)
        return Math.floor(resultado) + 'M'; // Convertir a M para millones
    }
}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
