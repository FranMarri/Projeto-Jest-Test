const calculadora = require('./calculadora');

test('soma 10 + 5 para igual a 15', () => {
  expect(calculadora(10, 5, 'soma')).toBe(15);
});

test('subtracao 10 - 5 para igual a 5', () => {
  expect(calculadora(10, 5, 'subtracao')).toBe(5);
});

test('multiplicacao 10 * 5 para igual a 50', () => {
  expect(calculadora(10, 5, 'multiplicacao')).toBe(50);
});

test('divisao 10 / 5 para igual a 2', () => {
  expect(calculadora(10, 5, 'divisao')).toBe(2);
});

test('divisao por zero', () => {
  expect(calculadora(10, 0, 'divisao')).toBe('Erro: Divisão por zero');
});
