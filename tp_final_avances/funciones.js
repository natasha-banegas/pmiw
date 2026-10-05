function dibujarPantallaInicio() {
  image(imagen[0], 0, 0, width, height);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("La autopista del sur", width / 2, 100);

  textSize(32);
  text("Julio Cortázar", width / 2, 155);

  dibujarBoton(300, 350, 200, 50, "COMENZAR");
}

function dibujarPantalla1() {
  image(imagen[1], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 480, 120);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[0], 30, 30, 700, 60);
  text(narrativa[1], 30, 65, 700, 60);
  text(narrativa[2], 30, 100, 700, 60);

  dibujarBoton(300, 370, 200, 50, "CONTINUAR");
}

function dibujarPantalla2() {
  image(imagen[2], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 550, 120);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[3], 30, 30, 700, 60);
  text(narrativa[4], 30, 65, 700, 60);
  text(narrativa[5], 30, 100, 700, 60);

  dibujarBoton(280, 370, 240, 50, "BAJAR DEL AUTO");
}

function dibujarPantalla3() {
  image(imagen[3], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 495, 145);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[6], 30, 30, 700, 60);
  text(narrativa[7], 30, 65, 700, 60);
  text(narrativa[8], 30, 100, 480, 60);

  dibujarBoton(90, 370, 260, 50, "TE ACERCÁS A HABLAR");
  dibujarBoton(440, 370, 260, 50, "VOLVÉS A TU AUTO");
}

function dibujarPantalla4() {
  image(imagen[4], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 495, 155);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[9], 30, 30, 700, 60);
  text(narrativa[10], 30, 65, 700, 60);
  text(narrativa[11], 30, 100, 700, 60);
  text(narrativa[12], 30, 135, 700, 60);

  dibujarBoton(300, 370, 200, 50, "CONTINUAR");
}

function dibujarPantalla5() {
  image(imagen[5], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 660, 85);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[13], 30, 30, 700, 60);
  text(narrativa[14], 30, 65, 700, 60);

  dibujarBoton(300, 370, 200, 50, "CONTINUAR");
}

function dibujarPantalla6() {
  image(imagen[6], 0, 0, width, height);

  dibujarFondoTexto(15, 15, 460, 120);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);

  text(narrativa[15], 30, 30, 700, 60);
  text(narrativa[16], 30, 65, 700, 60);
  text(narrativa[17], 30, 100, 700, 60);

  dibujarBoton(240, 370, 320, 50, "ESPERAR HASTA MAÑANA");
}

function dibujarFondoTexto(posX, posY, tamX, tamY) {
  fill(0, 180);
  rect(posX, posY, tamX, tamY, 15);
}

function dibujarBoton(posX, posY, tamX, tamY, texto) {
  fill(0, 200);
  rect(posX, posY, tamX, tamY, 15);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, posX + tamX / 2, posY + tamY / 2);
}

function detectarZonaR(posX, posY, tamX, tamY) {
  if (mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY) {
    return true;
  } else {
    return false;
  }
}
