function ePalindromo(str) {
    const limpaStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversoStr = limpaStr.split('').reverse().join('');
    return limpaStr === reversoStr;
  }
  
  module.exports = ePalindromo;
  