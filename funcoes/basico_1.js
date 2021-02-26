let a = 4;

console.log(a);

//function Declaration
function bomDia() {
	console.log("Bom dia!");
}

bomDia();

//function expression
const boaTarde = function () {
	console.log("Boa tarde");
}

boaTarde();

function somar(a = 0, b = 0) {
	return a + b;
}

let resultado = somar(3, 4);
console.log(resultado);

resultado = somar(3, 9, 5, 6, 7, 8);
console.log(resultado);

resultado = somar(3);
console.log(resultado);

resultado = somar();
console.log(resultado);