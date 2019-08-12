describe('Testing fibonacci.js:', () => {
    it('quando o número for 8 retornar 1, 1, 2, 3, 5, 8', () => {
        var resultado = fibonacciUntil(8);
        expect(resultado).toEqual([1, 1, 2, 3, 5, 8]);
    });

    it('quando o número for 10 retornar 1, 1, 2, 3, 5, 8', () => {
        var resultado = fibonacciUntil(10);
        expect(resultado).toEqual([1, 1, 2, 3, 5, 8]);
    });
});