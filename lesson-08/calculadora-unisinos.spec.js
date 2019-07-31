describe('Testing calculadora-unisinos.js:', ()=> { // describe é o contexto do que queremos testar 
    it('quando o grau A for 5 e o grau B for 6.7 eu devo ter passado', ()=> { // it é um teste unitário
      expect(passouOuNao(5, 6.7)).toBe(true); // aqui eu to validando se a soma deu certo mesmo 
    });

    it('quando o grau A for 3 e o grau B for 2 eu não devo ter passado', ()=> { // it é um teste unitário
        var resultado = passouOuNao(3, 2); // aqui eu tô chamando uma função do arquivo que quero testar
        expect(resultado).toBe(false); // aqui eu to validando se a soma deu certo mesmo 
      });

});