function clicou() {
    const teste = document.querySelector('#teste')  // seleciona o elemento com id="teste"
    const ul = teste.querySelector('ul') // seleciona o elemento ul através do id="teste" ou que esteja dentro dele

    //console.log(ul.innerHTML)  // inneHTML -> seleciona o contéudo dentro do elemento, pode se fazer consulta e modificar o conteúdo.
    //ul.innerHTML = "<li>Item alterado</li>"  // fazendo alteração no contéudo da ul
    //ul.innerHTML += "<li>Item adicionado</li>" // Adicionando conteúdo no ul obs: diferente do append o innerHTML altera todo o conteúdo selecionado, remove e depois adiciona.
    //ul.children[0].innerHTML = "Item alterado"  // seleciona o primeiro filho do ul e altera
    
    /* Obs: quando utilizamos o innerHTML ele remove os itens existentes da memoria para alterar ou adicionar um novo item/elemento]
     em uma lista com muitos elementos isso podera acarretar em perda de performance.*/
    
    
    /* Já o append não remove o item da memoria apenas adiciona junto ao conteúdo existente,
    adiciona conteúdo ao conteúdo existente sem alterar o HTML e serve apenas para texto
    ul.children[0].append(" ( alterado )")  */

    // Quando houve a necessidade de adicionar um elemento podemos fazer da seguinte forma:
    let newli = document.createElement("li")
    newli.innerText = "Elemento com texto adicionado"

    ul.appendChild(newli) // appendChild adiciona um filho ao elemento selecionado
    ul.prepend(newli) // a diferença para o prepend é que ele adiciona no começo ao contrário do append e appendChid que sempre irá adicionar ao final. 
}