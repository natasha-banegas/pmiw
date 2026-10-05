let pantalla;

let imagen = [];
let narrativa = [];

function preload() {
  for (let i = 0; i < 7; i++) {
    imagen[i] = loadImage("data/img/" + i + ".jpg");
  }

  narrativa = loadStrings("data/txt/narrativa.txt");
}

function setup() {
  createCanvas(800, 450);

  pantalla = 0;
}

function draw() {
  background(125);

  if (pantalla === 0) {
    dibujarPantallaInicio();
  }

  if (pantalla === 1) {
    dibujarPantalla1();
  }

  if (pantalla === 2) {
    dibujarPantalla2();
  }

  if (pantalla === 3) {
    dibujarPantalla3();
  }

  if (pantalla === 4) {
    dibujarPantalla4();
  }

  if (pantalla === 5) {
    dibujarPantalla5();
  }

  if (pantalla === 6) {
    dibujarPantalla6();
  }
}

function mousePressed() {
  if (pantalla === 0) {
    if (detectarZonaR(300, 350, 200, 50)) {
      pantalla = 1;
    }
  } else if (pantalla === 1) {
    if (detectarZonaR(300, 370, 200, 50)) {
      pantalla = 2;
    }
  } else if (pantalla === 2) {
    if (detectarZonaR(300, 370, 200, 50)) {
      pantalla = 3;
    }
  } else if (pantalla === 3) {
    if (detectarZonaR(100, 370, 250, 50)) {
      pantalla = 4;
    }

    if (detectarZonaR(450, 370, 250, 50)) {
      pantalla = 5;
    }
  } else if (pantalla === 4) {
    if (detectarZonaR(300, 370, 200, 50)) {
      pantalla = 6;
    }
  } else if (pantalla === 5) {
    if (detectarZonaR(300, 370, 200, 50)) {
      pantalla = 6;
    }
  }
}
