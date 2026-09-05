let sprite = [];
let fondo;

let posXMaga;
let posYMaga;
let tamXMaga;
let tamYMaga;
let velXMaga;

let posXFondo;
let velFondo;

let animar;
let estado;
let frameActual;

let velQuieta;
let velCaminar;
let velHechizo;

let tiempoEstado;
let duracionQuieta;
let duracionCaminar;

let cantidadHechizos;
let etapa;

let quieta = [0, 1];
let caminar = [2, 3, 1, 4];
let hechizo = [0, 5, 6];

function preload() {
  fondo = loadImage("data/fondo.png");

  for (let i = 0; i < 7; i++) {
    sprite[i] = loadImage("data/" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 600);

  posXMaga = 115;
  posYMaga = 325;
  tamXMaga = 230;
  tamYMaga = 168;
  velXMaga = 1.5;

  posXFondo = -15;
  velFondo = 2.5;

  animar = 0;
  estado = "QUIETA";
  frameActual = 0;

  velQuieta = 30;
  velCaminar = 20;
  velHechizo = 10;

  tiempoEstado = 0;
  duracionQuieta = 140;
  duracionCaminar = 220;

  cantidadHechizos = 0;
  etapa = 0;
}

function draw() {
  image(fondo, posXFondo, -135, 2200, 730);

  if (estado === "QUIETA") {
    animarPersonaje(quieta, velQuieta);

    tiempoEstado++;

    if (tiempoEstado >= duracionQuieta) {
      if (etapa === 0) {
        estado = "CAMINANDO";
        etapa = 1;
      } else if (etapa === 2) {
        estado = "HECHIZO";
        etapa = 3;
      }

      tiempoEstado = 0;
      frameActual = 0;
    }
  }

  if (estado === "CAMINANDO") {
    animarPersonaje(caminar, velCaminar);

    posXMaga += velXMaga;
    posXFondo -= velFondo;

    tiempoEstado++;

    if (tiempoEstado >= duracionCaminar) {
      if (etapa === 1) {
        estado = "QUIETA";
        etapa = 2;
      }

      tiempoEstado = 0;
      frameActual = 0;
    }
  }

  if (estado === "HECHIZO") {
    let termino = animarPersonaje(hechizo, velHechizo);

    if (termino === true) {
      cantidadHechizos++;

      if (cantidadHechizos >= 3) {
        estado = "CAMINANDO";
        etapa = 4;
        tiempoEstado = 0;
        frameActual = 0;
      } else {
        frameActual = 0;
      }
    }
  }

  image(sprite[animar], posXMaga, posYMaga, tamXMaga, tamYMaga);

  if (estado === "CAMINANDO" && etapa === 4) {
    if (posXMaga > width) {
      estado = "FIN";
    }
  }
}

function animarPersonaje(animacion, velocidad) {
  if (frameCount % velocidad === 0) {
    frameActual++;
  }

  if (frameActual >= animacion.length) {
    frameActual = 0;

    if (estado === "HECHIZO") {
      return true;
    }
  }

  animar = obtenerFrame(animacion);

  return false;
}

function obtenerFrame(animacion) {
  return animacion[frameActual];
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    estado = "QUIETA";
    tiempoEstado = 0;
    frameActual = 0;
    animar = 0;

    posXMaga = 115;
    posXFondo = -15;

    cantidadHechizos = 0;
    etapa = 0;
  }
}
