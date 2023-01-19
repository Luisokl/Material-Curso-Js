 // REST Operator. Através do REST Operador é possível passar parâmetros sem saber a quantidade exata, indicando uma lista ou um array

 function convidados(...nomes) {    
    console.log('Seja bem vindo, convidados');
    console.log(nomes);
 }

 convidados('Matheus', 'Lucas', 'Maria', 'Ana')

 // Ex de um função que irá gerar um número encima dos números que estão sendo passados como paramêtros:

 function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log('Numero gerado foi: ' + numeros[numeroGerado]);
 }

 sorteador(1, 3, 4, 5, 6, 65, 32, 21, 66, 44, 22);