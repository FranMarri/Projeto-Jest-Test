function calculadora(a, b, operacao) {
    switch (operacao) {
      case 'soma':
        return a + b;
      case 'subtracao':
        return a - b;
      case 'multiplicacao':
        return a * b;
      case 'divisao':
        return b !== 0 ? a / b : 'Erro: Divisão por zero';
      default:
        return 'Operação inválida';
    }
  }
  
  module.exports = calculadora;
  