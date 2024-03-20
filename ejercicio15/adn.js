// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) 
//y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U

function transcribir(cadenaADN) {
    let complementoARN = "";
    for (let i = 0; i < cadenaADN.length; i++) {
        switch (cadenaADN[i]) {
            case "G":
                complementoARN += "C";
                break;
            case "C":
                complementoARN += "G";
                break;
            case "T":
                complementoARN += "A";
                break;
            case "A":
                complementoARN += "U";
                break;
            default:
                
                return "Error: La cadena de ADN contiene caracteres inválidos.";
        }
    }
    return complementoARN;
}
// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

