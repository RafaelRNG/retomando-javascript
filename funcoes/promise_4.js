function gerarUmNumero(min, max, tempo) {
   if (min > max) [max, min] = [min, max]

   return new Promise(resolve => {
      setTimeout(() => {
         resolve(parseInt(Math.random() * (max - min + 1) + min))
      }, tempo)
   })
}

function gerarVariosNumeros() {
   return Promise.all([
      gerarUmNumero(1, 60, 4000),
      gerarUmNumero(1, 60, 1000),
      gerarUmNumero(1, 60, 3000),
      gerarUmNumero(1, 60, 500),
      gerarUmNumero(1, 60, 100),
      gerarUmNumero(1, 60, 1500),
   ])
}

gerarVariosNumeros()
   .then(numeros => console.log(numeros))
