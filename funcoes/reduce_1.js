const carrinho = [
   { nome: "Caneta", qtde: 10, preco: 7.99 },
   { nome: "Impressora", qtde: 0, preco: 649.50 },
   { nome: "Caderno", qtde: 4, preco: 27.10 },
   { nome: "lapis", qtde: 3, preco: 5.82 },
   { nome: "Tesoura", qtde: 1, preco: 19.20 }
]

//const getTotal = item => item.qtde * item.preco
//const somar = (acc, el) => acc + el
//const totalGeral = carrinho.map(getTotal).reduce(somar)

const totalGeral = carrinho
   .map(item => item.qtde * item.preco)
   .reduce((acc, el) => acc + el)

console.log(totalGeral);