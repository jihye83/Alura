class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaJump = -50;
    this.jump = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.jump < 2) {
      this.velocidadeDoPulo = this.alturaJump;
      this.jump++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.jump = 0;
    }
  }
  tornaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

  estaColidindo(inimigo) {
    if(this.invencivel){
       return false;
    }
    //   noFill();
    //   rect(this.x, this.y, this.largura, this.altura);
    //   rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    return colisao;
  }

}