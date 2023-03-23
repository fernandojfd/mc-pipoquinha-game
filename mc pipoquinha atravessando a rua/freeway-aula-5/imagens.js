// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada-2.png");
  imagemDoAtor = loadImage("imagens/ator-2.png");
  imagemCarro = loadImage("imagens/material-3.png");
  imagemCarro2 = loadImage("imagens/regua-2.png");
  imagemCarro3 = loadImage("imagens/caderno-1.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/neto.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}