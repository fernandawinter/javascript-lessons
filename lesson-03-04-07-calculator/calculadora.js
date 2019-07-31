function clicaSomar() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var somatorio = soma(x, y);
    setResultado(somatorio);

    // setResultado(soma(getPrimeiroValor(), getSegundoValor()));
}

function clicaSubtrair() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var resultado = subtracao(x, y);
    setResultado(resultado);
}

function clicaDividir() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var resultado = divisao(x, y);
    setResultado(resultado);
}

function clicaMultiplicar() {
    var x = getPrimeiroValor();
    var y = getSegundoValor();
    var resultado = multiplicacao(x, y);
    setResultado(resultado);}

function getPrimeiroValor() {
    var resultado = parseInt(document.getElementById("primeiroValor").value);
    return resultado;

    // return parseInt(document.getElementById("primeiroValor").value);
}

function getSegundoValor() {
    var resultado = parseInt(document.getElementById("segundoValor").value);
    return resultado;
}

function setResultado(resultado) {
    document.getElementById("resultadoCalculo").innerHTML = "Meu Resultado: " + resultado;
}
function soma(valorA, valorB) {
    var resultado = valorA + valorB;
    return resultado; 
}

function subtracao(valorA, valorB) {
    var resultado = valorA - valorB;
    return resultado; 
}

function divisao(valorA, valorB) {
    var resultado;
    
    if (valorB == 0) {
         resultado = 'Não é possível dividir por zero';
    } else {
         resultado = valorA / valorB;  
    }
    return resultado;
}

function multiplicacao(valorA, valorB) {
    var resultado = valorA * valorB;
    return resultado;
}