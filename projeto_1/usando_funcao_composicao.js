const path = require("path");
const {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumeros,
  removerSimbolos,
  agruparPalavras,
  ordenarPorAtributoNumerico,
  composicao
} = require("./funcoes");

const palavrasMaisUsadas = composicao(
  lerDiretorio,
  elementosTerminadosCom(".srt"),
  lerArquivos,
  conteudos => conteudos.join(''),
  todoConteudo => todoConteudo.split('\n'),
  removerSeVazio,
  removerSeIncluir("-->"),
  removerSeApenasNumeros,
  removerSimbolos(['.', "?", "-", ",", '"', "♪", "_", "<i>", "</i>", "\r", "[", "]", "(", ")"]),
  conteudos => conteudos.join(''),
  separarPorEspaco => separarPorEspaco.split(" "),
  removerSeVazio,
  removerSeApenasNumeros,
  agruparPalavras,
  ordenarPorAtributoNumerico("quantidade", "desc")
)

palavrasMaisUsadas(path.join(__dirname, "legendas"))
  .then(console.log)