function clicou() {
    const button = document.querySelector('button')

    console.log(button.classList) // lista as classes do elemento selecionado
    //button.classList.add('azul') // adiciona uma classe ao elemento selecionado
    button.classList.remove('azul') // remove uma classe ao elemento selecionado
    button.classList.contains('azul') // verifica se a classe existe no elemento
}