//exemplo 1
/*
function soma(a) {
  return b => c => a + b + c;
}
console.log(soma(1)(2)(3))
*/

function textoComTamanhoEntre(min) {
  return max => {
    return erro => {
      return texto => {
        //Lazy Evaluation
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      }
    }
  }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido")

const p1 = { nome: "A", preco: 14.9, desc: 0.25 }

forcarNomeProdutoValido(p1.nome)