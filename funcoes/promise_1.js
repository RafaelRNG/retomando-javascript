const promise = new Promise(resolve => resolve(["Ana", "Bia", "Carlos", "Daniel"]))

promise
   .then(value => value[0])
   .then(value => value[0])
   .then(letter => letter.toLowerCase())
   .then(res => console.log(res))