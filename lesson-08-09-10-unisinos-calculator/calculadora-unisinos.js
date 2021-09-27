var PESO_GRAU_A = 0.3;
var PESO_GRAU_B = 0.7;

function passouOuNao(grauA, grauB) {
    if (grauA > 10) {
        return 'nota do grau A inválida';
    }

    if (grauB > 10) {
        return 'nota do grau B inválida';
    }

    if (grauA < 0) {
        return 'nota do grau A não pode ser menor do que 0';
    }

    if (grauB < 0) {
        return 'nota do grau B não pode ser menor do que 0';
    }

    var totalGrauA = Math.round((grauA * PESO_GRAU_A) * 100) / 100;
    var totalGrauB = Math.round((grauB * PESO_GRAU_B) * 100) / 100;
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

function quantoPrecisoGrauB(grauA) {

    if (grauA > 10) {
        return 'não é possível existir uma nota maior do que 10';
    }

    if (grauA < 0) {
        return 'não é possível existir uma nota menor do que 0';
    }

    var totalGrauA = grauA * PESO_GRAU_A;
    var totalGrauB = 6 - totalGrauA;
    var grauB = Math.round((totalGrauB / PESO_GRAU_B) * 100) / 100;
    return grauB;
}