// setInterval - método que executa de tempo em tempo infinitamente

/*function acao() {
    document.write('Executando ...<br>')
}
setInterval(acao, 1000)*/


/*var timer = setInterval(() => {     // função anonima(arrow) outra forma de se aplicar o setInterval
    document.write('Executando ... <br>')
}, 5000)

clearInterval(timer);  // para pausar o setInterval*/



// setTimeout - Executa apenas uma vez o que se passar


function acao() {
    document.write('Executando setTimeout')
}

setTimeout(acao, 3000);


setTimeout(() => { console.log('Executou setTimeout')}, 3000); 