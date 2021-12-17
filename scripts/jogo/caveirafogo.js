class CaveiraFogo {
    constructor(x, variacaoY, largura, altura, velocidade, escala){
        this.x = x;
        this.variacaoY = variacaoY;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade;
        this.escala = escala;
        grupoInimigosCaveiraFogo = new Group();
    }
    iniciar() {
        this.velocidade = random(-5, -3);
        this.escala = parseInt(random(1, 3));
        this.yInicial = height - this.altura - this.variacaoY* this.escala;
        this.y = this.yInicial - (50 * parseInt(random(0, 5)));
        caveiraFogoAni = createSprite(this.x, this.yInicial, this.largura, this.altura);
        caveiraFogoAni.addAnimation('caveiraFogo', imagemCaveiraFogoEX);
        caveiraFogoAni.addAnimation('morte', imageminimigoMorto);
        caveiraFogoAni.scale = this.escala;
        caveiraFogoAni.animation.frameDelay = 8;
        caveiraFogoAni.position.y = this.y;
        caveiraFogoAni.setCollider ('circle', -5,13* this.escala, 32);
        caveiraFogoAni.velocity.x = this.velocidade; 
        grupoInimigosCaveiraFogo.add(caveiraFogoAni);
    }
    movimentoVertical() {
        for(var i = 0; i<grupoInimigosCaveiraFogo.length; i++) {
            var g = grupoInimigosCaveiraFogo[i];
            //moving all the ghosts y following a sin function (sinusoid)
            g.position.y += sin(frameCount/10)*3;
          }
    }
    removerCaveira() {
        for(var i = 0; i<grupoInimigosCaveiraFogo.length; i++) {
            if(grupoInimigosCaveiraFogo[i].position.x < 0 - (this.largura)) {
                grupoInimigosCaveiraFogo[i].remove();
                console.log("removeu: "+i);
            }
        }
    }
    removerCaveiraTodos(){
        for(var i = 0; i<grupoInimigosCaveiraFogo.length; i++) {
            grupoInimigosCaveiraFogo[i].remove();
        }
    }
}