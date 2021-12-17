function preload() {
  imagemCenarioCidade = loadImage('imagens/cenario/background-ok.png');
  imagemCenario2Cidade = loadImage('imagens/cenario/middleground-ok.png');
  imagemCenario3Cidade = loadImage('imagens/cenario/frontground-ok.png');

  imagemPersonagem = loadSpriteSheet('imagens/personagem/heroirun.png', 100, 59, 6);
  imagemPersonagemEX = loadAnimation(imagemPersonagem);
  imagemPersonagemPulo = loadSpriteSheet('imagens/personagem/heroipulo.png', 100, 59, 4);
  imagemPersonagemPuloEX = loadAnimation(imagemPersonagemPulo);
  imagemPersonagemAtaque = loadSpriteSheet('imagens/personagem/heroiataque.png', 100, 59, 5);
  imagemPersonagemAtaqueEX = loadAnimation(imagemPersonagemAtaque);
  imagemPersonagemEspadaColisao = loadImage('imagens/assets/inv.png');

  imagemGato = loadSpriteSheet('imagens/inimigos/gato.png', 96, 53, 4);
  imagemGatoEX = loadAnimation(imagemGato);
  imagemCaveiraFogo = loadSpriteSheet('imagens/inimigos/fire-skull.png', 96, 112, 8);
  imagemCaveiraFogoEX = loadAnimation(imagemCaveiraFogo);

  imageminimigoMorto = loadAnimation('imagens/inimigos/enemy-death/enemy-death-1.png', 'imagens/inimigos/enemy-death/enemy-death-2.png', 'imagens/inimigos/enemy-death/enemy-death-3.png', 'imagens/inimigos/enemy-death/enemy-death-4.png', 'imagens/inimigos/enemy-death/enemy-death-5.png');

  imagemVida = loadImage('imagens/assets/shard_01d.png');
  imagemVidaMarcador = loadImage('imagens/assets/shard_01i.png');

  imagemGameOver = loadImage('imagens/assets/tela-gameover.jpg');
  imagemTelaInicial = loadImage('imagens/assets/tela-inicio-igreja.jpg');

  fontePontuacao = loadFont('imagens/assets/fonteTelaInicial.otf');
  fonteTelaGameOver = loadFont('imagens/assets/Metamorphous-Regular.ttf');
  fonteTexto = loadFont('imagens/assets/Merriweather-Regular.ttf');

  somDaFase1 = loadSound('sons/fase01.mp3');
  somDoGameOver = loadSound('sons/game_over.mp3');

  somDoPulo = loadSound('sons/SFX_Jump_09.mp3');
  somDoAtaque = loadSound('sons/Sword2.mp3');
  somDoDano = loadSound('sons/Shield.mp3');
  somDaVida = loadSound('sons/som_vida.mp3');
  somDaMorteMonstro = loadSound('sons/Enemy_Dies.mp3');

  arquivoConfiguracao = loadJSON("configuracao/configuracao.json");
} 