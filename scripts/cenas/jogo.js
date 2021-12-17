class Jogo {
    constructor () {
    }
    setup() {
        cenario1a = new Cenario(imagemCenarioCidade, 0.2);
        cenario1b = new Cenario(imagemCenario2Cidade, 1);
        cenario1c = new Cenario(imagemCenario3Cidade, 5, 2036);

        heroi = new Heroi(100, 50, 100, 59, 2);
        
        gato = new Gato(width, 26, 96, 53, 1, 2);
        caveiraFogo = new CaveiraFogo(width, 0, 96, 112, -1, 1);

        this.frequenciaInimigos = ['n','n','g','g','c'];
    }
    restart() {
        pontuacao = new Pontuacao();
        vida = new Vida(arquivoConfiguracao.valores.vidaMaxima, arquivoConfiguracao.valores.vidaInicial);
    }
    keyPressed(key) {
        if(cenaAtual == 'jogo') {
            if(key === 'ArrowUp' || key === ' ' || key === 'x'){
                heroi.pula();
            }
            if(key === 'z' || key === 'ArrowRight' || key === 'Control' ){
                heroi.ataque();
            }
        } else if(cenaAtual == 'gameOver') {
            if(key === 'Enter'){
                cenaAtual = 'telaInicial';
                heroi.heroiGameOver();
            }
        } else if(cenaAtual == 'telaInicial') {
            if(key === 'Enter'){
                cenaAtual = 'jogo';
                somDaFase1.loop();
                somDaFase1.setVolume(0.2);
                jogo.restart();
            }
        }
    }
    draw() {
        cenario1a.exibe(); 
        cenario1a.move();
        cenario1b.exibe(); 
        cenario1b.move();
        cenario1c.exibe(); 
        cenario1c.move();
      
        vida.draw();
        pontuacao.exibe();
        if(cenaAtual == 'jogo') {
            pontuacao.adicionarPonto();
        }
        pontuacao.adicionaPtsVida();
        pontuacao.aumentaDificuldade();
      
        heroi.aplicaGravidade();

        //Randoniza o aparecimento de inimigos na tela
        //com base no FPS e o fatorDificuldade
        if(frameCount%(100 - fatorDificuldade) == 0) {
            switch ( this.frequenciaInimigos[parseInt(random(0, this.frequenciaInimigos.length))] ) {
                case 'n':
                    break;
                case 'g':
                    gato.iniciar();
                    break;
                case 'c':
                    caveiraFogo.iniciar();
                    break;
            }
        }
        caveiraFogo.movimentoVertical();
        gato.removerGato();
        caveiraFogo.removerCaveira();

        //Game Over Man, Game Over!
        if(vida.vidas === 0){
            cenaAtual = 'gameOver';
            somDaFase1.stop();
            somDoGameOver.play();
        }
        drawSprites();
    }
}