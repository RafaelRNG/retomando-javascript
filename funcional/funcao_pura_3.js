let quantidadeDeExecucoes = 0

//Pura
function somar(a, b) {
  quantidadeDeExecucoes++ //efeito colateral observável
  return a + b;
}

console.log(quantidadeDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(quantidadeDeExecucoes)