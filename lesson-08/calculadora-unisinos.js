var PESO_GRAU_A = 0.3;
var PESO_GRAU_B = 0.7;

function passouOuNao(grauA, grauB) {
    var totalGrauA = grauA * PESO_GRAU_A;
    var totalGrauB = grauB * PESO_GRAU_B;
    var somaGrauAEGrauB = totalGrauA + totalGrauB;

    if (somaGrauAEGrauB >= 6) {
        return true;
    } else {
        return false
    }

    // return grauA * PESO_GRAU_A + grauB * PESO_GRAU_B >= 6;
    
    // if (grauA * PESO_GRAU_A + grauB * PESO_GRAU_B >= 6) {
    //     return true;
    // } else {
    //     return false;
    // }
}