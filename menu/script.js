function clicou()  {
    let elementArea = document.getElementById('menu-area');
    if (elementArea.classList.contains('menu-off') === false) {
        document.getElementById('menu-area').classList.add('menu-off')
    } else {
        document.getElementById('menu-area').classList.remove('menu-off')
    }
    
}

// Outra forma de resolver seria 

/*
function clicou() {
    let elementArea = document.getElementById('menu-area');
    if(elementArea.style.width = '200px') {
        elementArea.style.width = '0px';
    } else {
        elementArea.style.width = '200px';
    }
}

*/
