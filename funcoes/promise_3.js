function gerarNumerosEntre(min, max) {
   if (min > max) [max, min] = [min, max]

   return new Promise(resolve => {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
      resolve(aleatorio)
   })
}

gerarNumerosEntre(60, 1)
   .then(valor => valor * 10)
   .then(numero => `o numero gerado foi ${numero}`)
   .then(res => console.log(res))