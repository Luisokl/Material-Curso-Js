function clicou() {
    const input = document.querySelector('input')


    // através da função hasAttribute podemos verificar se um atributo existe dentro do elemento.
    // ele irá retornar um valor lógico.
    if (input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM')
    } else {
        console.log('Não tem placeholder ..')
    }

    // outra função nos permite alterar um atributo de um elemento:
    input.setAttribute('placeholder', 'Placeholder alterado') // o primeiro valor selecionao atributo a ser alterado e o segundo o novo valor.
}