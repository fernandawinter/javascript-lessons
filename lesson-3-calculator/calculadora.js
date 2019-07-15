<html>
    <head>
      <meta charset="UTF-8"></meta>
      <title>Calculadora</title>
    </head>
    <body>
        <p>Minha Calculadora</p>
        <input id="primeiroValor" type="number"/>
        <input id="segundoValor" type="number"/>
        <input type="button" value="Somar" onclick="clicaSomar()"/>
        <input type="button" value="Subtrair" onclick="clicaSubtrair()"/>
        <input type="button" value="Dividir" onclick="clicaDividir()"/>
        <input type="button" value="Multiplicar" onclick="clicaMultiplicar()"/>
        <p id="resultadoCalculo"></p>

    </body>
</html>

function clicaSomar() {
    var x = parseInt(document.getElementById("primeiroValor").value);
    var y = parseInt(document.getElementById("segundoValor").value);
    var somatorio = soma(x, y);
    document.getElementById("resultadoCalculo").innerHTML = "Meu Resultado: " + somatorio;

}

function clicaSubtrair() {
    var x = parseInt(document.getElementById("primeiroValor").value);
    var y = parseInt(document.getElementById("segundoValor").value);
    var resultado = subtracao(x, y);
    document.getElementById("resultadoCalculo").innerHTML = "Meu Resultado: " + resultado;

}

function clicaDividir() {
    var x = parseInt(document.getElementById("primeiroValor").value);
    var y = parseInt(document.getElementById("segundoValor").value);
    var resultado = divisao(x, y);
    document.getElementById("resultadoCalculo").innerHTML = "Meu Resultado: " + resultado;

}

function clicaMultiplicar() {
    var x = parseInt(document.getElementById("primeiroValor").value);
    var y = parseInt(document.getElementById("segundoValor").value);
    var resultado = multiplicacao(x, y);
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
    var resultado = valorA / valorB;
    return resultado;

}

function multiplicacao(valorA, valorB) {
    var resultado = valorA * valorB;
    return resultado;

}