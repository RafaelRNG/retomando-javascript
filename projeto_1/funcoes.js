const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
   let arquivos = fs.readdirSync(caminho)
   return new Promise((resolve, reject) => {
      try {
         resolve(arquivos.map(arquivo => path.join(caminho, arquivo)));
      } catch (e) {
         reject(e);
      }
   })
}

function elementosTerminadosCom(padraoTextural) {
   return array => array.filter(el => el.endsWith(padraoTextural))
}

function lerArquivo(caminho) {
   return new Promise((resolve, reject) => {
      try {
         resolve(fs.readFileSync(caminho, { encoding: "utf-8" }).toString());
      } catch (e) {
         reject(e)
      }
   })
}

function lerArquivos(caminhos) {
   return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerSeVazio(array) {
   return array.filter(el => el.trim())
}

function removerSeIncluir(padraoTextural) {
   return array => array.filter(el => !el.includes(padraoTextural))

}

function removerSeApenasNumeros(array) {
   return array.filter(el => {
      const num = parseInt(el.trim());
      return num !== num
   })
}

function removerSimbolos(simbolos) {

   return array => {
      return array.map(el => {

         let textoSemSimbolos = el;
         simbolos.forEach(simbolo => {
            textoSemSimbolos = textoSemSimbolos.split(simbolo).join("")
         })
         return textoSemSimbolos;
      })
   }
}

function agruparPalavras(palavras) {
   return Object.values(palavras.reduce((acc, palavra) => {

      const el = palavra.toLowerCase()

      const quantidade = acc[el] ? acc[el].quantidade + 1 : 1

      acc[el] = { elemento: el, quantidade }
      return acc;
   }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem = "asc") {
   return array => {
      const asc = (obj1, obj2) => obj1[attr] - obj2[attr]
      const desc = (obj1, obj2) => obj2[attr] - obj1[attr]

      return array.sort(ordem === "asc" ? asc : desc)
   }
}

module.exports = {
   lerDiretorio,
   elementosTerminadosCom,
   lerArquivo,
   lerArquivos,
   removerSeVazio,
   removerSeIncluir,
   removerSeApenasNumeros,
   removerSimbolos,
   agruparPalavras,
   ordenarPorAtributoNumerico
}