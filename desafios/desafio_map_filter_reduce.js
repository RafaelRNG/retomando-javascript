const carrinho = [
   { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
   { nome: "Impressora", qtde: 1, preco: 649.50, fragil: true },
   { nome: "Caderno", qtde: 4, preco: 27.10, fragil: false },
   { nome: "lapis", qtde: 3, preco: 5.82, fragil: false },
   { nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true }
]

//1.fragil: true
//2.qtde * preco -> total
//2. media total

const isFragil = item => item.fragil
const carrinhoFragil = carrinho.filter(isFragil)
console.log(carrinhoFragil)

console.log("---------------------")

const precoFinal = item => item.preco * item.qtde
const precoFinalCarrinho = carrinho.map(precoFinal).reduce((acc, el) => acc + el)
console.log(precoFinalCarrinho)

console.log("---------------------")

const totalQtde = carrinho.map(item => item.qtde).reduce((acc, el) => acc + el)
console.log(totalQtde)

console.log("---------------------")

const media =
   carrinho.filter(item => item.fragil)
      .map(item => item.preco * item.qtde)
      .reduce((acc, at) => {
         const novaQuantidade = acc.qtde + 1
         const novoTotal = acc.total + at

         return {
            qtde: novaQuantidade,
            total: novoTotal,
            media: novoTotal / novaQuantidade
         }
      }, { qtde: 0, total: 0, media: 0 }).media

console.log(media);