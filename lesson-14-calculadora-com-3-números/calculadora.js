const MENSAGEM_DE_ERRO = 'É necessário colocar números nas opções';

function clicaSomar() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var z = getTerceiroValor();
    var somatorio = soma(x, y, z);
    setResultado(somatorio);

}

function clicaSubtrair() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var z = getTerceiroValor();
    var resultado = subtracao(x, y, z);
    setResultado(resultado);
}

function clicaDividir() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var z = getTerceiroValor();
    var resultado = divisao(x, y, z);
    setResultado(resultado);
}

function clicaMultiplicar() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var z = getTerceiroValor();
    var resultado = multiplicacao(x, y, z);
    setResultado(resultado);
}

function getPrimeiroValor() {
    var resultado = parseInt(document.getElementById("primeiroValor").value);
    return resultado;

}

function getSegundoValor() {
    var resultado = parseInt(document.getElementById("segundoValor").value);
    return resultado;
}

function getTerceiroValor() {
    var resultado = parseInt(document.getElementById("terceiroValor").value);
    return resultado;
}

function setResultado(resultado) {
    document.getElementById("resultadoCalculo").innerHTML = "Meu Resultado: " + resultado;
}
function soma(valorA, valorB, valorC) {
    if (!validaValores(valorA, valorB, valorC)) {
        return 'É necessário colocar números nas opções';
    }
    return valorA + valorB + valorC;

}
function subtracao(valorA, valorB, valorC) {
    if (!validaValores(valorA, valorB, valorC)) {
        return MENSAGEM_DE_ERRO;
    }
    return valorA - valorB - valorC;
}
function divisao(valorA, valorB, valorC) {
    if (!validaValores(valorA, valorB, valorC)) {
        return MENSAGEM_DE_ERRO;
    }
    var resultado; 

    if (valorB == 0 || valorC == 0) { // != é o contrário de == 
        resultado = 'Não é possível dividir por zero';
    } else {
        resultado = valorA / valorB / valorC;
    }
    return resultado;
}

function multiplicacao(valorA, valorB, valorC) {
    if (!validaValores(valorA, valorB, valorC)) {
        return MENSAGEM_DE_ERRO;
    }
    return valorA * valorB * valorC;
}

function validaValores(valorA, valorB, valorC) {
    //     if (!validaValor(valorA) || !validaValor(valorB) || !validaValor(valorC)) {
    //         return 'É necessário colocar números nas opções';
    //     } else {
    //         return '';
    //     }



    if (validaValor(valorA) && validaValor(valorB) && validaValor(valorC)) {
        return true;
    } else {
        return false;
    }
}
function validaValor(valor) {
    if (isNaN(valor) || valor == null) {
        return false;
    } else {
        return true;
    }
}

