describe('Testing fizz-buzz.js:', ()=> {  
    it('quando o número for 1 retornar só o número 1', ()=> { 
      var resultado = fizzBuzz(1);
      expect(resultado).toBe('1'); 
    });

    it('quando o número for 4 retornar só o número 4', ()=> { 
      var resultado = fizzBuzz(4);
      expect(resultado).toBe('4'); 
    });

    it('quando o número for 3 retornar Fizz', ()=> { 
      var resultado = fizzBuzz(3);
      expect(resultado).toBe('Fizz'); 
    });

    it('quando o número for 5 retornar Buzz', ()=> { 
      var resultado = fizzBuzz(5);
      expect(resultado).toBe('Buzz'); 
    });

    it('quando o número for 15 retornar FizzBuzz', ()=> { 
      var resultado = fizzBuzz(15);
      expect(resultado).toBe('FizzBuzz'); 
    });

    it('quando o número for 21 retornar Fizz', ()=> { 
      var resultado = fizzBuzz(21);
      expect(resultado).toBe('Fizz'); 
    });

    it('quando o número for 20 retornar Buzz', ()=> { 
      var resultado = fizzBuzz(20);
      expect(resultado).toBe('Buzz'); 
    });

    it('quando o número for 45 retornar FizzBuzz', ()=> { 
      var resultado = fizzBuzz(45);
      expect(resultado).toBe('FizzBuzz'); 
    });
});