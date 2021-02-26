const nums = [1, 2, 3, 4, 5];
const dobro = (valor, indice, array) => valor * 2 + indice + array.length;
console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];

const primeiraLetra = nome => nome[0];

const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
   { nome: "Caneta", qtde: 10, preco: 7.99 },
   { nome: "Impressora", qtde: 0, preco: 649.50 },
   { nome: "Caderno", qtde: 4, preco: 27.10 },
   { nome: "lapis", qtde: 3, preco: 5.82 },
   { nome: "Tesoura", qtde: 1, preco: 19.20 }
]

/*
const nomeProduto = produto => produto.nome
const nomesDeCadaProduto = carrinho.map(nomeProduto)
console.log(nomesDeCadaProduto);

const multValor = produto => produto.qtde * produto.preco;
const totalValor = carrinho.map(multValor);

console.log(totalValor)
*/
console.log("-----------")
const nomeProduto = carrinho.map(valor => valor.nome);
console.log(nomeProduto);
const totalValor = carrinho.map(valor => valor.preco * valor.qtde);
console.log(totalValor);

Array.prototype.MeuMap = function (fn) {
   const mapped = [];
   for (let i = 0; i < this.length; i++) {
      mapped.push(fn(this[i], i, this));
   }
   return mapped;
}

console.log("-----------")
console.log("-----------")
carrinho.MeuMap((valor, indice, array) => console.log(`${indice}) nome: ${valor.nome} - quantidade em estoque: ${valor.qtde} - valor unitario: ${valor.preco} \n info completa: ${array}`));
carrinho.MeuMap(valor => console.log(valor.nome[0]));