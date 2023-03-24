let pessoa = {
    nome: 'Luis',
    sobrenome: 'Fernando',
    idade: 29,
    social:{
        facebook:'DEVLUIS',
        Instagram: 'DeveloperLuis'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }

};

// let {nome, idade, social: {instagram} } = pessoa;   seria uma das formas para se buscar um valor de um objeto dentro de outro objeto
let { facebook, Instagram } = pessoa.social; // desta forma também conseguimos buscar um valor.

console.log(facebook, Instagram);