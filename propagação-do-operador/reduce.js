// Reduce -- O reduce busca reduzir um array 

let numeros = [4, 5, 6, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`total até o momento ${acumulador}`);
    console.log(`valor atua ${numero}`);
    console.log(`indice atual ${indice}`);
    console.log(`array original ${original}`)

    return acumulador += numero;
})

console.log('Total do REDUCE: '+ total);