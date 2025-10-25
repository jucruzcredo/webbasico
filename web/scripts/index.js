let paragrafo = document.getElementById("nome");
let imagem = document.getElementById("imagem");

function exibir() {
    paragrafo.innerHTML = "Fernando Vinícius"
}

function ocultar() {
    paragrafo.innerHTML = ""
}

function ligar() {
    imagem.src = 'imgs/pic_bulbon.gif';
}

function desligar() {
    imagem.src = 'imgs/pic_bulboff.gif';
}

function estilizar () {
    let texto = document.getElementById ('texto2');
    texto.style.fontSize = '50px';    
}

function esconder () {
    document.getElementById ('teste').style.display = 'none';
}
function exibir () {
    document.getElementById ('oculto').style.display = 'block';
}

function exibirMensagem () {
    window.alert ('Olá!');
}