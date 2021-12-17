function setup() {
  createCanvas(768, 432);
  frameRate(60);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  jogo.restart();
  cenas = {
    jogo,
    telaInicial,
    gameOver
  };
}
function keyPressed() {
  jogo.keyPressed(key);
}
function draw() {
  cenas[cenaAtual].draw();
}

