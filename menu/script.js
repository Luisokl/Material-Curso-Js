function clicou() {
    document.getElementById('menu-opener');
    menuOff()
}

function menuOff() {
    let elementArea = document.getElementById('menu-area');
    if (elementArea.classList.contains('menu-off') === false) {
        document.getElementById('menu-area').classList.add('menu-off')
    } else {
        document.getElementById('menu-area').classList.remove('menu-off')
    }
    
}

