const letrasAninhadas = [
  ["o", ["l"], "á"],
  [" "],
  ["m", ["u", ["n"]], "d", "o"],
  ["!", "!", "!", "!"]]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letrasAninhadas
  .flatMap(l => [l, ","])
  .reduce((acc, el) => acc + el)

console.log(resultado);