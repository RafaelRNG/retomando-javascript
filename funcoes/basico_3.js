//arrow function
const felizNatal = () => console.log("Feliz natal!");
felizNatal();

const saudacao = nome => `Fala ${nome}, blz!?!?`;
console.log(saudacao("RNG"));

const somar = (...numeros) => {
   let total = 0;

   for (let valor of numeros) {
      total += valor;
   }

   return total;
}

console.log(somar(2, 4, 5, 6, 7, 8));

const potencia = base => exp => Math.pow(base, exp);



const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(2)(8));

//this
Array.prototype.log = function () {
   console.log(this);
}

Array.prototype.ultimo = function () {
   console.log(this[this.length - 1]);
}

Array.prototype.primeiro = () => {
   console.log(this[0]);
}

const numeros = [1, 2, 3, 55]
numeros.log();
numeros.ultimo();
numeros.primeiro();