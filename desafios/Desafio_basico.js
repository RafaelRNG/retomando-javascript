function somar(valor1) {
   return function (valor2) {
      return function (valor3) {
         return valor1 + valor2 + valor3;
      }
   }
}

function calcular(x) {
   return function (y) {
      return function (fn) {
         return fn(x, y);
      }
   }
}

function subtrair(a, b) {
   return a - b;
}

function multiplicar(a, b) {
   return a * b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
console.log(r1);
console.log(r2);