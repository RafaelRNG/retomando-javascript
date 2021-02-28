function funcionarOuNao(valor, chanceErro) {
   return new Promise((resolve, reject) => {
      if (Math.random() < chanceErro) {
         reject('Ocorreu um erro');
      } else {
         resolve(valor)
      }
   })
}

funcionarOuNao("testando", 0.5)
   .then(valor => `valor: ${valor}`)
   .then(
      v => console.log(v),
      err => console.log(`Erro esp.: ${err}`))
   .catch(err => console.log(err)) 