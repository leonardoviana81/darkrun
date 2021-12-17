class Heroi{
    constructor(x, variacaoY, largura, altura, limitePulos){
        this.x = x;
        this.variacaoY = variacaoY;
        this.largura = largura;
        this.altura = altura;

        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.gravidade = 0.5;
        this.alturaDoPulo = 10;
        this.pulos = 0;
        this.limitePulos = limitePulos;
        this.ataques = 0;
        heroiInvencivel = false;
        this.espadaX;
        this.espadaY;

        personagem = createSprite(this.x, this.yInicial, this.largura, this.altura);
        personagem.addAnimation('corrida', imagemPersonagemEX);
        personagem.addAnimation('pulo', imagemPersonagemPuloEX);
        personagem.addAnimation('ataque', imagemPersonagemAtaqueEX);
        personagem.scale = 2;

        personagem.setCollider ('rectangle', 0, 15, 40, 40 );
        personagem.changeAnimation('corrida');
    }
    pula() {
        if(this.pulos < this.limitePulos){
            this.pulos++;
            somDoPulo.play();
            personagem.changeAnimation('pulo');
            personagem.animation.frameDelay = 10;
            personagem.animation.rewind();
            personagem.velocity.y = -this.alturaDoPulo;
            personagem.animation.looping = false;
            if(this.ataques > 0) {
                this.espada.remove();
            }
            personagem.setCollider ('rectangle', 10, 5, 20, 40 );
        }
    }
    aplicaGravidade() {
        this.espadaX = personagem.position.x+65;
        this.espadaY = personagem.position.y+4;
        
        if(this.pulos > 0) {
            personagem.velocity.y += this.gravidade;
            if(personagem.position.y >= this.yInicial){
                personagem.velocity.y = 0;
                personagem.position.y = this.yInicial;
                personagem.changeAnimation('corrida');
                personagem.setCollider ('rectangle', 0, 15, 40, 40 );
                this.pulos = 0; 
                personagem.animation.looping = true;
                if(this.ataques > 0) {
                    this.espada.remove();
                }
                this.ataques = 0;
            }
        }
        if(this.ataques > 0) {
            this.espada.position.x = this.espadaX;
            this.espada.position.y = this.espadaY;
            //Colisao do ataque em cada inimigo
            this.espada.overlap(grupoInimigosGato, verificaAtaque);
            this.espada.overlap(grupoInimigosCaveiraFogo, verificaAtaque);
            //verifica o fim da animação do ataque e remove ele
            if(personagem.animation.getFrame() === 4){
                personagem.changeAnimation('corrida');
                this.ataques = 0;
                this.espada.remove();
            }
        }
        //Verifica colisao do personagem com cada inimigo
        personagem.overlap(grupoInimigosGato, verificaColisao);
        personagem.overlap(grupoInimigosCaveiraFogo, verificaColisao);
    }
    ataque() {
            this.ataques++;
            if(this.ataques === 1) {
                personagem.changeAnimation('ataque');
                personagem.animation.rewind();
                personagem.animation.play();
                personagem.animation.frameDelay = 4;
                personagem.animation.looping = false;
                this.espada = createSprite (this.espadaX, this.espadaY, 60, 20);
                this.espada.setCollider ("rectangle", 0, 0, 60, 20);
                this.espada.addImage(imagemPersonagemEspadaColisao); //imagem transparente
                somDoAtaque.play();
            }
    }
    tornarInvencivel() {
        heroiInvencivel = true;
        this.booVisivel = false;
        //faz sprite do personagem piscar
        meuIntervaloInvencivel = setInterval( () => {
                personagem.visible = this.booVisivel;
                this.booVisivel = !this.booVisivel;
        }, 50 );
        //define tempo de invencibilidade em milisegundos
        meuIntervaloInvencivelTempo = setTimeout( () => {
            clearInterval(meuIntervaloInvencivel);
            heroiInvencivel = false;
            personagem.visible = true;
            //console.log("normal");
        }, 2000 );
    }
    //define as variaveis do personagem para estado inicial quando morre
    heroiGameOver() {
        heroiInvencivel = false;
        this.booVisivel = false;
        personagem.visible = true;
        personagem.velocity.y = 0;
        personagem.position.y = this.yInicial;
        this.pulos = 0;
        personagem.changeAnimation('corrida');
        if(this.ataques > 0) {
            this.espada.remove();
        }
        clearTimeout(meuIntervaloInvencivelTempo);
        clearInterval(meuIntervaloInvencivel);
        this.ataques = 0;
    } 
}
//O primeiro parâmetro será o sprite (individual ou de um grupo) que chamou a função 
//O segundo parâmetro será o sprite (individual ou de um grupo) contra o qual o collide, bounce, ou displace é verificado
//Verifica se o personagem é atingido por um inimigo
function verificaColisao(primeiroSprite, segundoSprite) {
    if(!heroiInvencivel) {
        vida.perdeVida();
        heroi.tornarInvencivel();
        somDoDano.play();
    }
}
//Verifica se o ataque acerta um inimigo
function verificaAtaque(primeiroSprite, segundoSprite) {
    //Faz a verificação com base do nome da animação inicial do inimigo e define a pontuação
    switch (segundoSprite.getAnimationLabel()) {
        case 'caveiraFogo':
            pontuacao.adicionarPontoValor(75);
            break;
        case 'gato':
            pontuacao.adicionarPontoValor(50);
            break;
    }
    //Executa a animação de morte do inimigo
    segundoSprite.changeAnimation('morte');
    somDaMorteMonstro.play();
    segundoSprite.setCollider ('rectangle', width, height, 1, 1);
    const meuIntervalo = setInterval( () => {
        if(segundoSprite.animation.getFrame() === 4){
            segundoSprite.remove();
            clearInterval(meuIntervalo);
        }
    }, 100 );
}
//Remove a animação de morte do inimigo
function animacaoMorteInimigo(sprite) {
    if(segundoSprite.animation.getFrame() === 5){
        segundoSprite.remove();
    }
}