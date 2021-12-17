class GameOver {
    constructor() {
    }
    draw() {
        background(0, 0, 0);
        this._imagemDeFundo();
        this._texto();
        gato.removerGatoTodos();
        caveiraFogo.removerCaveiraTodos();
        fatorDificuldade = 0;
    }
    _imagemDeFundo() {
        image(imagemGameOver, 0, 0, width, height);
    }
    _texto() {
        textFont(fonteTelaGameOver);
        fill(225, 225, 225);
        textSize(100);
        textAlign(CENTER);
        text('Game', width/2, height/3);
        text('Over', width/2, height/3+105);
        textFont(fonteTexto);
        textSize(30);
        textAlign(CENTER);
        text('Pontuação: '+parseInt(pontuacao.pontos), width/2, height/3+160);
        textSize(15);
        text('Pressione ENTER para jogar novamente.', width/2, height-30);
    }
}