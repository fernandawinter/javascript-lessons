function fibonacciUntil(numeroLimite) {
    var listaDeElementosFibonacci = [1, 1];
    var i = 0;

    // var novoElemento = 1;
    // while (novoElemento <= numeroLimite) {
    //     listaDeElementosFibonacci.push(novoElemento);
    //     novoElemento = listaDeElementosFibonacci[i] + listaDeElementosFibonacci[i + 1];
    //     i++;
    // }
    
    do {
        var novoElemento = listaDeElementosFibonacci[i] + listaDeElementosFibonacci[i + 1];
        if (novoElemento > numeroLimite) {
            break;
        }
        listaDeElementosFibonacci.push(novoElemento); 
        i = i + 1;
    } while (true);

    return listaDeElementosFibonacci;
}