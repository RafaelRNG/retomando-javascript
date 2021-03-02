const pessoa = {
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
  end: {
    rua: "Feliz"
  }
}

//Atribuição por Referência
const outraPessoa = pessoa

//Passagem por Referência
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa }
  novaPessoa.nome = "Joao"
  novaPessoa.cidade = "Fortaleza"
  novaPessoa.end.rua = "ABC"

  return novaPessoa;
}

console.log(alteraPessoa(pessoa));

console.log(pessoa);

let a = 3;
let b = a; //atribuição por valor (copia!)

b--
a++

console.log(a, b)