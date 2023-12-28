class Stone {
  constructor() {
    this.x2 = random(width);
    this.y2 = 0;
    this.width = random(10, 30);
    this.height = random(10, 30);
    this.image = loadImage('data/roca.png');
  }

  dibujar() {
    image(this.image, this.x2, this.y2, this.width, this.height);
  }

  fall() {
    this.y2 += 5;
  }

  offscreen() {
    return this.y2 > height;
  }
}
