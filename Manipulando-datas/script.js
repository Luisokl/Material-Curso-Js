var data = new Date();  // função que tras a data e horário completo atual
console.log(data)

data.getHours(); // apenas horário
data.getMinutes(); // apenas os minutos
data.getSeconds(); // apenas os segundos

var datanova = new Date("March 10, 2023"); // função posibilita criar uma data com valores que quizer
console.log(datanova);

console.log(Date.parse(datanova)); // função que transforma a data em milisegundos
console.log(new Date(1678417200000)); // função que transforma milisegundos em uma data

console.log(datanova.getDate()); // função para se pegar apenas o dia.
console.log(datanova.getMonth()); // função para se pegar apenas o mês.   (o js retornará 2 pois começa a contar do zero!)
datanova.getDay(); // apenas o dia da semana
console.log(datanova.getFullYear()); // retorna apenas o ano.

console.log(datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear());  /* dessa forma podemos formatar a data
conforme querer, no gatMonth resolvemos o problema da contagem que começa em 0 no js assim imprimindo o mês certo.*/

datanova.setDate(datanova.getDate()+5); // com a função setDate podemos somar dias a nossa data.
datanova.setHours(datanova.getHours()+10); // com a função setHours podemos somar horas.


// Exemplo de como podemos trazer os dias da semana utilizando uma estrutura de array

datanova.getDay(); // trás o dia em número

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']  // cria o array com as datas da semana!
console.log(dias[datanova.getDay()]);   // passa a função getDay como indice para o array.