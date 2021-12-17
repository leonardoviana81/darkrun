class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.pontosMinVida = 0;
        this.pontosTeste = 0;
        this.pontosMinDif = 0;
        this.pontosTesteDif = 0;
    }
    exibe() {
        textFont(fontePontuacao);
        textAlign(RIGHT);
        fill('#fff');
        textSize(30);
        text(parseInt(this.pontos), width - 30, 50);
    }
    adicionarPonto(){
        this.pontos = this.pontos + 0.1;
    }
    adicionarPontoValor(valor){
        this.pontos = this.pontos + valor;
    }
    //adiciona uma vida extra a cada 1000 pontos
    adicionaPtsVida(){
        this.pontosTeste =  parseInt(this.pontos) - this.pontosMinVida;
        if(this.pontosTeste >= 1000) {
            vida.ganhaVida();
            this.pontosMinVida =  this.pontosMinVida + 1000;
            somDaVida.play();
        }
    }
    //aumenta a frequencia que os inimigos aparecem na tela a cada 750pontos
    aumentaDificuldade() {
        if(fatorDificuldade < 90) {
            this.pontosTesteDif =  parseInt(this.pontos) - this.pontosMinDif;
            if(this.pontosTesteDif >= 750) {
                fatorDificuldade += 5;
                this.pontosMinDif =  this.pontosMinDif + 750;
            }
        }
    }
    
}