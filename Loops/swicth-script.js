

function pedir(){
    var valor = prompt("Digite um valor para escolha de 1 a 4");

    switch(Number(valor)) {
        case 1:
            alert("Você escolheu Suco")
        break;
        case 2:
            alert("Você escolheu Água gelada") 
        break;
        case 3:
            alert("Você escolheu Sorvete")       
        break;
        case 4: 
            alert("Você chamou o garçom")
        break;
        default:
            alert("Escolha uma das opções de 1 a 4")
        break;    
    }
}

/*  Podemos usar texto como entrada ex:

    function nome() {
        var pessoa = prompt("Digite seu nome");
    }

    switch(valor) {
        case 'Luis':
            alert('Olá Luis');
        break;
        case 'Guilherme':
            alert('Olá Guilherme');
        break;
        case 'Vitor':
            alert('Olá Vitor');
        break;
        default:
            alert('Essa pessoa não esta registrada')
        break;
    }
    */