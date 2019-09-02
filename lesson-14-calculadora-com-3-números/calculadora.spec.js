describe('Testing calculadora.js:', ()=> { 
    it('sum 5+5+5 results in 15', ()=> { 
      var resultado = soma(5,5,5); 
      expect(resultado).toBe(15); 
    });

    it('sum 6+3+1 results in 10', ()=> { 
        var resultado = soma(6,3,1); 
        expect(resultado).toBe(10); 
    });

    it('sum -6+7+3 results in 4', ()=> { 
        var resultado = soma(-6,7,3); 
        expect(resultado).toBe(4); 
    });

    it('divide 50/5/2 results in 5', ()=> { 
        var resultado = divisao(50,5,2);
        expect(resultado).toBe(5); 
      });

      it('divide 30/2/3 results in 5', ()=> { 
        var resultado = divisao(30,2,3); 
        expect(resultado).toBe(5);  
      });

      it('multiply 4*5*3 results in 60', ()=> { 
        var resultado = multiplicacao(4,5,3);
        expect(resultado).toBe(60);  
      });

      it('subtract 9-7-3 results in -1', ()=> { 
        var resultado = subtracao(9,7,3); 
        expect(resultado).toBe(-1); 
      });

      it('multiply 8*1*6 results in 48', ()=> { 
        var resultado = multiplicacao(8,1,6); 
        expect(resultado).toBe(48);  
      });

      it('subtract 12-8-2 results in 2', ()=> { 
        var resultado = subtracao(12,8,2); 
        expect(resultado).toBe(2); 
      });

      it('subtract null results in error', ()=> { 
        var resultado = subtracao(null,null,null); 
        expect(resultado).toBe('É necessário colocar números nas opções'); 
      });

      it('subtract NaN results in error', ()=> { 
        var resultado = subtracao(NaN,NaN,NaN); 
        expect(resultado).toBe('É necessário colocar números nas opções'); 
      });

      it('subtract undefined results in error', ()=> { 
        var resultado = subtracao(undefined,undefined,undefined); 
        expect(resultado).toBe('É necessário colocar números nas opções'); 
      });
  })