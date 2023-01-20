
let listElement = document.querySelector('#app');

let post = [];

function nutriApp(){

    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((resposta) => resposta.json())   // .then retornara se deu certo    .json transforma a resposta em um json
    .then((json) => {
        post = json;

        post.map((item) => {
            let liElement = document.createElement('li');
            let titleElement = document.createElement('h2');
            let imgElement = document.createElement('img');
            let descriptionElement = document.createElement('p');

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.append(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);


        })
    })
    .catch(() => {    // .catch retornara se algo der errado 
        console.log('Algo deu errado')
    })


}

nutriApp()