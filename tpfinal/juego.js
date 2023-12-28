class Juego {
  constructor() {
    this.stones = [];
    this.score = 0;
    this.gameOver = false;
    this.gameWin = false; 
    this.car = new Car();
    this.fondo = loadImage('data/marte.jpg');
  }

  dibujar() {
    background(220);
    image(this.fondo, 0, 0, width, height);

    if (!this.gameOver && !this.gameWin) {
      this.car.dibujar();
      this.car.move();

      if (frameCount % 60 == 0) {
        this.stones.push(new Stone());
      }

      for (let i = this.stones.length - 1; i >= 0; i--) {
        this.stones[i].dibujar();
        this.stones[i].fall();

        if (this.car.hits(this.stones[i])) {
          this.gameOver = true;
        }

        if (this.stones[i].offscreen()) {
          this.stones.splice(i, 1);
          this.score++;
          if (this.score == 20){
            this.gameWin = true;
          }
        }
      }
      fill(0);
      textSize(20);
      textAlign(LEFT, CENTER); 
      text(`Score: ${this.score}`, 20, 20);
    }
    if (this.gameWin == true) {
      this.mostrarVictoria();
    }
     if (this.gameOver == true) {
      this.mostrarGameOver();
    }
  }

  mostrarGameOver() {
    fill(255);
    textSize(52);
    textAlign(CENTER, CENTER);
    text('¡PERDISTE!', width / 2, height / 2);
    textSize(20);
    text('Haz click para reinicar', width / 2, height / 2 + 100);
  }

  mostrarVictoria() {
    fill(255);
    textSize(52);
    textAlign(CENTER, CENTER);
    text('¡GANASTE!', width / 2, height / 2);
    textSize(20);
    text('Haz click para continuar', width / 2, height / 2 + 100);
  }

  teclaPresionada() {
    if (this.gameOver && keyCode === 116) {
      this.stones = [];
      this.score = 0;
      this.gameOver = false;
      this.car = new Car();
      aplicacion.numero = 5;
    }
  }

  moverCarro() {
    this.car.move();
  }
}
