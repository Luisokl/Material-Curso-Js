function trocandoImg(filename, nameWallpapper) {
    document.querySelector('.imagem').setAttribute('src', filename);
    document.querySelector('imagem').setAttribute('data-imagem', nameWallpapper);
}

function mostrandoName() {
    let wallpapper = document.querySelector('.imagem').getAttribute('data-imagem');
    alert('O Wallpapper que está em uso é ' + wallpapper)
}