const fs = require("fs");
const path = require("path");

function retornarDados(caminho) {
   return new Promise((resolve) => {
      resolve(fs.readFileSync(caminho))
   });
}

retornarDados(path.join(__dirname, "dados.txt"))
   .then(valor => console.log(valor.toString()))

