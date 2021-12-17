class TelaInicial {
    constructor() {
    }
    draw() {
        this._imagemDeFundo();
        this._texto();
    }
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }
    _texto() {
        textFont(fonteTelaGameOver);
        fill(225, 225, 225);
        textSize(100);
        textAlign(CENTER);
        text('Dark Run', width/2, height/3);
        fill('rgba(255,255,255, 0.5)');
        text('Dark Run', width/2+random(-3, 3), height/3+random(-3, 3));
        fill(225, 225, 225);
        textSize(30);
        textAlign(CENTER);
        text('Pressione ENTER para jogar', width/2, height/2);
        textFont(fonteTexto);
        textSize(20);
        text('Utilize a tecla Z para atacar e X para pular.', width/2, height/2+160);
    }
}