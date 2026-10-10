//"La autopista del Sur" - Julio Cortázar
//Natasha Banegas & Dante Abal
//https://youtu.be/V8Lt62h2AMc

let pantalla;

let imagen = [];
let narrativa = [];
let boton = [];

let contador;
let opacidad;
let tamTexto;
let posYTexto;

let sonidoFondo;
let sonidoClick;

let fuenteTitulo;
let fuenteTexto;

function preload() {
  for (let i = 0; i < 27; i++) {
    imagen[i] = loadImage("data/img/" + i + ".jpg");
  }

  narrativa = loadStrings("data/txt/narrativa.txt");
  boton = loadStrings("data/txt/botones.txt");

  sonidoFondo = loadSound("data/sound/fondo.mp3");
  sonidoClick = loadSound("data/sound/click.mp3");

  fuenteTitulo = loadFont("data/font/SedanSC-Regular.ttf");
  fuenteTexto = loadFont("data/font/Manrope-Medium.ttf");
}

function setup() {
  createCanvas(800, 450);

  pantalla = "0";

  contador = 0;
  opacidad = 0;
  tamTexto = 20;
  posYTexto = 500;
}

function draw() {
  background(125);

  if (pantalla === "0") {
    dibujarPantallaInicio();
  }

  if (pantalla === "1") {
    dibujarPantalla1();
  }

  if (pantalla === "2") {
    dibujarPantalla2();
  }

  if (pantalla === "3") {
    dibujarPantalla3();
  }

  if (pantalla === "4A") {
    dibujarPantalla4A();
  }

  if (pantalla === "4B") {
    dibujarPantalla4B();
  }

  if (pantalla === "5") {
    dibujarPantalla5();
  }

  if (pantalla === "6") {
    dibujarPantalla6();
  }

  if (pantalla === "7") {
    dibujarPantalla7();
  }

  if (pantalla === "8A") {
    dibujarPantalla8A();
  }

  if (pantalla === "8B") {
    dibujarPantalla8B();
  }

  if (pantalla === "9") {
    dibujarPantalla9();
  }

  if (pantalla === "10") {
    dibujarPantalla10();
  }

  if (pantalla === "11A") {
    dibujarPantalla11A();
  }

  if (pantalla === "11B") {
    dibujarPantalla11B();
  }

  if (pantalla === "12") {
    dibujarPantalla12();
  }

  if (pantalla === "13") {
    dibujarPantalla13();
  }

  if (pantalla === "14") {
    dibujarPantalla14();
  }

  if (pantalla === "FA1") {
    dibujarFinalAlternativo1();
  }

  if (pantalla === "15") {
    dibujarPantalla15();
  }

  if (pantalla === "16") {
    dibujarPantalla16();
  }

  if (pantalla === "17") {
    dibujarPantalla17();
  }

  if (pantalla === "18") {
    dibujarPantalla18();
  }

  if (pantalla === "FO") {
    dibujarFinalOriginal();
  }

  if (pantalla === "19") {
    dibujarPantalla19();
  }

  if (pantalla === "FA2") {
    dibujarFinalAlternativo2();
  }

  if (pantalla === "creditos") {
    dibujarCreditos();
  }
}

function mousePressed() {
  if (pantalla === "0") {
    if (detectarZonaR(530, 350, 200, 50)) {
      sonidoClick.play();

      if (!sonidoFondo.isPlaying()) {
        sonidoFondo.loop(true);
        sonidoFondo.amp(0.3);
      }

      pantalla = "1";
    }
  } else if (pantalla === "1") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "2";
    }
  } else if (pantalla === "2") {
    if (detectarZonaR(585, 380, 200, 50)) {
      sonidoClick.play();
      pantalla = "3";
    }
  } else if (pantalla === "3") {
    if (detectarZonaR(85, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "4A";
    }

    if (detectarZonaR(435, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "4B";
    }
  } else if (pantalla === "4A") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "5";
    }
  } else if (pantalla === "4B") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "5";
    }
  } else if (pantalla === "5") {
    if (detectarZonaR(555, 380, 230, 50)) {
      sonidoClick.play();
      pantalla = "6";
    }
  } else if (pantalla === "6") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "7";
    }
  } else if (pantalla === "7") {
    if (detectarZonaR(85, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "8A";
    }

    if (detectarZonaR(435, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "8B";
    }
  } else if (pantalla === "8A") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "9";
    }
  } else if (pantalla === "8B") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "9";
    }
  } else if (pantalla === "9") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "10";
    }
  } else if (pantalla === "10") {
    if (detectarZonaR(85, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "11A";
    }

    if (detectarZonaR(435, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "11B";
    }
  } else if (pantalla === "11A") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "12";
    }
  } else if (pantalla === "11B") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "12";
    }
  } else if (pantalla === "12") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "13";
    }
  } else if (pantalla === "13") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "14";
    }
  } else if (pantalla === "14") {
    if (detectarZonaR(85, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "15";
    }

    if (detectarZonaR(435, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "FA1";
      contador = 0;
      opacidad = 0;
    }
  } else if (pantalla === "15") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "16";
    }
  } else if (pantalla === "16") {
    if (detectarZonaR(555, 380, 230, 50)) {
      sonidoClick.play();
      pantalla = "17";
    }
  } else if (pantalla === "17") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "18";
    }
  } else if (pantalla === "18") {
    if (detectarZonaR(85, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "FO";
      contador = 0;
      opacidad = 0;
    }

    if (detectarZonaR(435, 380, 260, 50)) {
      sonidoClick.play();
      pantalla = "19";
    }
  } else if (pantalla === "19") {
    if (detectarZonaR(600, 380, 180, 50)) {
      sonidoClick.play();
      pantalla = "FA2";
      contador = 0;
      opacidad = 0;
    }
  } else if (pantalla === "creditos") {
    if (detectarZonaR(300, 350, 200, 50)) {
      sonidoClick.play();
      pantalla = "0";
      contador = 0;
      opacidad = 0;
      tamTexto = 20;
      posYTexto = 500;
    }
  }
}
