class Cenario {
    constructor(imagem, velocidade, tamanho = width){
      this.imagem = imagem;
      this.velocidade = velocidade;
      this.tamanho = tamanho;
      this.x1 = 0;
      this.x2 = this.tamanho;
    }
    exibe() {
      image(this.imagem, this.x1,0, this.tamanho,height);
      image(this.imagem, this.x2,0, this.tamanho,height);
    }
    move() {
      this.x1 = this.x1 - this.velocidade;
      this.x2 = this.x2 - this.velocidade;
  
      if(this.x1 < -this.tamanho){
        this.x1 = this.tamanho - this.velocidade;
      }
      if(this.x2 < -this.tamanho){
        this.x2 = this.tamanho - this.velocidade;
      }
    }
  }