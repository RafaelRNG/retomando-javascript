function bomDia() {
   console.log("Bom dia!");
}

const boaTarde = function () {
   console.log("Boa tarde!");
}

//Passar uma função como parametro pra outra função
function executarQualquerCoisa(fn) {
   if (typeof fn === "function") {
      fn();
   }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a  partir de uma outra função

function potencia(base) {
   return function (exp) {
      return Math.pow(base, exp);
   }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(2)(8));

/**
 * Desafio1 - somar(3)(4)(5)
 * desafio2 - calcular(3)(7)(fn)
 */