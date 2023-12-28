class Car {
  constructor() {
    this.x3 = 300;
    this.y3 = 550;
    this.alto = 20;
    this.ancho = 40;
    this.image = loadImage('data/nave.png');
  }

  dibujar() {
    image(this.image, this.x3, this.y3, this.ancho, this.alto);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x3 > 0) {
      this.x3 -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x3 < width - this.ancho * 2) {
      this.x3 += 5;
    }
  }

  hits(stone) {
    return (
      this.x3 - this.ancho  < stone.x2 &&
      this.x3 + this.ancho > stone.x2 &&
      this.y3 < stone.y2 + stone.height
      );
  }
}
