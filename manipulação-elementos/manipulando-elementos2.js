/*
function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector('ul')*/
        
    /* O after e o before adiciona um texto antes ou depois do elemento selecionado: 
        ul.after('Texto novo adicionado') 
    Assim como no append o after e o before não altera a memoria ao adicionar
    e so é possível adicionar textos, para adicionar um elemento segue a sintaxe: */ 
     
    //const newButton = document.createElement('button') //cria o elemento botão e salva na const newButton
   // newButton.innerHTML = 'Botão'  // adiciona o texto Botão ao elemento button
    /*devemos ter em mente que qualquer coisa que for manipular tem que estar salvo na memória do computador
    e depois indicar aonde será adiciona ou alterado.*/

    //ul.after(newButton) // adiciona o botão apos o elemento ul
//}


// Agora vamos adicionar elementos ao Documento HTML através do javaScript

function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector('ul')

    let newUl = document.createElement('ul')  // criamos o elemento ul

    for (let i = 0; i < 5; i++) {  // criamos um loop para criar os elementos li
        let newLi = document.createElement('li') // criando os elementos li
        newLi.innerHTML = 'Item' // adicionando texto aos elementos
        newUl.append(newLi)  // adicionando os elementos li ao ul
    }

    ul.after(newUl);  // após o ul selecinado adicione novo elemento ul criado

}    