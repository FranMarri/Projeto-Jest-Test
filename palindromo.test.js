const ePalindromo = require('./palindromo');

test('verifica se "arara" é um palíndromo', () => {
  expect(ePalindromo('arara')).toBe(true);
});

test('verifica se "casa" não é um palíndromo', () => {
  expect(ePalindromo('casa')).toBe(false);
});
