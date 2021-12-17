class Gato{
    constructor(x, variacaoY, largura, altura, velocidade, escala){
        this.x = x;
        this.variacaoY = variacaoY;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade;
        this.escala = escala;
        grupoInimigosGato = new Group();
    }
    iniciar(){
        this.velocidade = random(-15, -2);
        this.escala = parseInt(random(1, 4));
        this.yInicial = height - this.altura - this.variacaoY* this.escala;
        this.y = this.yInicial;
        
        gatoAni = createSprite(this.x, this.yInicial, this.largura, this.altura);
        gatoAni.addAnimation('gato', imagemGatoEX);
        gatoAni.addAnimation('morte', imageminimigoMorto);
        gatoAni.scale = this.escala;

        gatoAni.setCollider ('rectangle', 0, 10 * this.escala, 60, 30);
        gatoAni.velocity.x = this.velocidade; 
        grupoInimigosGato.add(gatoAni);
    }
    removerGato(){
        for(var i = 0; i<grupoInimigosGato.length; i++) {
            if(grupoInimigosGato[i].position.x < 0 - (this.largura)) {
                grupoInimigosGato[i].remove();
            }
        }
    }
    removerGatoTodos(){
        for(var i = 0; i<grupoInimigosGato.length; i++) {
            grupoInimigosGato[i].remove();
        }
    }
}