let aplicacion;

function preload() {
  aplicacion = new Aplicacion();
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  aplicacion.dibujar();
}

function mousePressed() {
  aplicacion.mousePresionado();
}
