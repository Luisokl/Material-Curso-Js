let pessoa = {
    nome: "Luis",
    sobrenome: "Fernando",
    empresa: "Innovare",
    cargo: "analista da Garantia da Qualidade"
};

// console.log(pessoa.nome);
// console.log(pessoa.cargo);

// Desconstruindo objeto:

// caso o nome da propriedade do objeto já esta sendo utilizada podemos renomear, como no exemplo com o nome abaixo:
const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa; // dessa forma podemos chamar as propridades de qualquer objeto

console.log(nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);


// Desconstruindo array:

let nomes = ["Matheus", "Lucas", "Carlos"];

let { 0:matheus, 2:terceiraPessoa } = nomes;  // neste exemplos pegamos através do indice 

console.log(matheus);
console.log(terceiraPessoa);

// outra maneira de descontruir array:

let [primeironome, segundonome] = nomes;  // neste exemplo pegamos atráves da posição 

console.log(primeironome)

// Podemos criar um array já o desconstruindo desta forma:

let [nome, sobrenome2] = ['Luis', 'Fernando'];

console.log(nome,sobrenome2);