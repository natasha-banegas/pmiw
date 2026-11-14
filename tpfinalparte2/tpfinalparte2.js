//"La autopista del sur" - Julio Cortázar
//Banegas Natasha & Abal Dante
//https://youtu.be/HtvsN_zvL7E

let juego;

function preload() {
  juego=new Juego();
  juego.cargarRecursos();
}

function setup() {
  createCanvas(800, 400);
  juego.iniciar();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}
