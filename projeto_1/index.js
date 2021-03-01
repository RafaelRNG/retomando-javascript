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
   ordenarPorAtributoNumerico
} = require("./funcoes");

lerDiretorio(path.join(__dirname, "legendas"))
   .then(elementosTerminadosCom(".srt"))
   .then(lerArquivos)
   .then(conteudos => conteudos.join(''))
   .then(todoConteudo => todoConteudo.split('\n'))
   .then(removerSeVazio)
   .then(removerSeIncluir("-->"))
   .then(removerSeApenasNumeros)
   .then(removerSimbolos(['.', "?", "-", ",", '"', "♪", "_", "<i>", "</i>", "\r", "[", "]", "(", ")"]))
   .then(conteudos => conteudos.join(''))
   .then(separarPorEspaco => separarPorEspaco.split(" "))
   .then(removerSeVazio)
   .then(removerSeApenasNumeros)
   .then(agruparPalavras)
   .then(valor => ordenarPorAtributoNumerico("quantidade", "desc")(valor))
   .then(console.log)