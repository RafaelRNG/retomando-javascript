function esperarPor(tempo = 2000) {
   return new Promise((resolve => setTimeout(() => resolve(), tempo)))
}

/*
esperarPor(2000)
   .then(() => console.log("Executando 1..."))
   .then(esperarPor)
   .then(() => console.log("Executando 2..."))
   .then(esperarPor)
   .then(() => console.log("Executando 3..."))*/

function retornarValor() {
   return new Promise(resolve => {
      resolve(10)
   })
}

async function executar() {

   let valor = await retornarValor()

   await esperarPor(1500)
   console.log(`Async/Await ${valor}`)

   await esperarPor(1500)
   console.log(`Async/Await ${valor + 1}`)

   await esperarPor(1500)
   console.log(`Async/Await ${valor + 2}`)

   return valor + 3;
}

async function executarDeVerdade() {
   const resposta = await executar()

   console.log(resposta)
}

executarDeVerdade()