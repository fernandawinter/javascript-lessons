function fibonacciUntil(numeroLimite) {
    var resultado = [1, 1];
    var contador = 0;
    do {
        var soma = resultado[contador] + resultado[contador + 1];
        resultado.push(soma);
        contador++;
        console.log('contando... ' + contador);
    } while (soma < numeroLimite);


    return resultado;
}