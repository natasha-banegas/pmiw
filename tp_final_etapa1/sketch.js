let pantalla;

let portada;
let botones;
let narrativa;

let inicioNarrativa = [];
let finNarrativa = [];

function preload() {
  portada = loadImage("data/img/portada.jpg");

  botones = loadStrings("data/txt/botones.txt");
  narrativa = loadStrings("data/txt/narrativa.txt");
}

function setup() {
  createCanvas(800, 450);

  pantalla = 0;

  inicioNarrativa = [
    0, 3, 6, 9, 13, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
    60, 63, 66, 69, 72,
  ];

  finNarrativa = [
    2, 5, 8, 12, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59,
    62, 65, 68, 71, 74,
  ];
}

function draw() {
  background(125);

  if (pantalla === 0) {
    dibujarPantallaInicio();
  } else {
    dibujarPantallaNarrativa();
  }
}

function dibujarPantallaInicio() {
  image(portada, 0, 0, width, height);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(48);
  text("La autopista del sur", width / 2, 120);

  textSize(32);
  text("Julio Cortázar", width / 2, 160);

  dibujarBoton(300, 350, 200, 50, botones[0]);
}

function dibujarPantallaNarrativa() {
  fill(255);
  textAlign(LEFT, TOP);
  textSize(24);

  let inicio = inicioNarrativa[pantalla - 1];
  let fin = finNarrativa[pantalla - 1];

  for (let i = inicio; i <= fin; i++) {
    text(narrativa[i], 50, 100 + (i - inicio) * 60, 700, 200);
  }

  if (pantalla === 3) {
    dibujarBoton(100, 350, 250, 50, botones[2]);
    dibujarBoton(450, 350, 250, 50, botones[3]);
  } else {
    dibujarBoton(300, 350, 200, 50, botones[1]);
  }
}

function dibujarBoton(posX, posY, tamX, tamY, nombre) {
  fill(255);
  rect(posX, posY, tamX, tamY);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(nombre, posX + tamX / 2, posY + tamY / 2);
}

function detectarZonaR(posX, posY, tamX, tamY) {
  if (mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (pantalla === 0) {
    if (detectarZonaR(300, 350, 200, 50)) {
      pantalla = 1;
    }
  } else if (pantalla === 3) {
    if (detectarZonaR(100, 350, 250, 50)) {
      pantalla = 4;
    } else if (detectarZonaR(450, 350, 250, 50)) {
      pantalla = 5;
    }
  } else {
    if (detectarZonaR(300, 350, 200, 50)) {
      pantalla++;
    }
  }
}