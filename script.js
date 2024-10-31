// Array contendo as imagens e suas probabilidades de aparecer
// Array contendo as imagens e suas probabilidades de aparecer
var imagens = [
    { src: "img/WalterComprimidoSemPessoa.jpg", probabilidade: 95 }, // 10% de chance de aparecer
    { src: "img/gifs/frasesPHP (1).gif", probabilidade: 1 },                   // 90% de chance de aparecer
    { src: "img/gifs/frasesPHP (2).gif", probabilidade: 1 },                   // 90% de chance de aparecer
    { src: "img/gifs/frasesPHP (3).gif", probabilidade: 1 },                   // 90% de chance de aparecer
    { src: "img/gifs/frasesPHP (4).gif", probabilidade: 1 }                    // 90% de chance de aparecer
];


// Função para selecionar uma imagem baseada nas probabilidades
function selecionarImagem(imagens) {
    var totalProbabilidade = imagens.reduce((total, img) => total + img.probabilidade, 0);
    var rand = Math.random() * totalProbabilidade;
    var acumulado = 0;

    for (var i = 0; i < imagens.length; i++) {
        acumulado += imagens[i].probabilidade;
        if (rand < acumulado) {
            return imagens[i].src;
        }
    }

    return imagens[imagens.length - 1].src; // Caso o número aleatório seja maior que o acumulado por causa de algum erro de arredondamento
}

// Seleciona a imagem assim que o script é carregado
document.addEventListener("DOMContentLoaded", function() {
    var imagemSelecionada = selecionarImagem(imagens);
    var elementoImg = document.querySelector("img"); // Seleciona a imagem existente no HTML
    elementoImg.src = imagemSelecionada; // Define o src para a imagem escolhida
});
