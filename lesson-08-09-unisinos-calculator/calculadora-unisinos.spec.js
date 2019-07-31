describe('Testing calculadora-unisinos.js:', ()=> { // describe é o contexto do que queremos testar 
    it('quando o grau A for 5 e o grau B for 6.7 eu devo ter passado', ()=> { // it é um teste unitário
      expect(passouOuNao(5, 6.7)).toBe(true); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 3 e o grau B for 2 eu não devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(3, 2); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(false); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 5.9 e o grau B for 5.9 eu não devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(5.9, 5.9); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(false); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 6 e o grau B for 6 eu devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(6, 6); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(true); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 0 e o grau B for 0 eu não devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(0, 0); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(false); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 10 e o grau B for 10 eu devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(10, 10); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(true); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 10 e o grau B for 10 eu devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(10, 10); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(true); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 8 e o grau B for 11 um erro deve ser retornado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(8, 11); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe('nota do grau B inválida'); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 11 e o grau B for 8 um erro deve ser retornado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(11, 8); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe('nota do grau A inválida'); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for -4 e o grau B for 8 um erro deve ser retornado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(-4, 8); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe('nota do grau A não pode ser menor do que 0'); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 7 e o grau B for -4 um erro deve ser retornado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(7, -4); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe('nota do grau B não pode ser menor do que 0'); // aqui eu to validando se a soma deu certo mesmo 
    });

    




    it('quando eu tirar 6 no grau A preciso tirar 6 no grau B', ()=> { // it é um teste unitário
        var resultado = quantoPrecisoGrauB(6); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(6); // aqui eu to validando se a soma deu certo mesmo 
    });

});