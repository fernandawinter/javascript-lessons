//import calculadora from './calculadora'; //importando o arquivo que eu quero testar

describe('Testing calculadora.js:', ()=> { // describe é o contexto do que queremos testar 
    it('sum 5+5 results in 10', ()=> { // it é um teste unitário
      var resultado = soma(5,5); // aqui eu tô chamando uma função do arquivo que quero testar
      expect(resultado).toBe(10); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('sum 6+3 results in 9', ()=> { // it é um teste unitário
        var resultado = soma(6,3); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(9); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('sum -6+7 results in 1', ()=> { // it é um teste unitário
        var resultado = soma(-6,7); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(1); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('divide 5/5 results in 1', ()=> { // it é um teste unitário
        var resultado = divisao(5,5); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(1); // aqui eu to validando se a soma deu certo mesmo 
      });

      it('divide 7/0 results in error', ()=> { // it é um teste unitário
        var resultado = divisao(7,0); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe('Não é possível dividir por zero'); // aqui eu to validando se a soma deu certo mesmo 
      });

      it('multiply 6*8 results in 48', ()=> { // it é um teste unitário
        var resultado = multiplicacao(6,8); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(48); // aqui eu to validando se a soma deu certo mesmo 
      });

      it('subtract 7-5 results in 2', ()=> { // it é um teste unitário
        var resultado = subtracao(7,5); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(2); // aqui eu to validando se a soma deu certo mesmo 
      });

      it('multiply 4*5 results in 20', ()=> { // it é um teste unitário
        var resultado = multiplicacao(4,5); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(20); // aqui eu to validando se a soma deu certo mesmo 
      });

      it('subtract 7-4 results in 3', ()=> { // it é um teste unitário
        var resultado = subtracao(7,4); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(3); // aqui eu to validando se a soma deu certo mesmo 
      });

  })