function dibujarPantallaInicio() {
  image(imagen[0], 0, 0, width, height);

  dibujarFondoTexto(450, 0, 350, height);

  contador++;

  if (contador > 0 && contador < 80) {
    opacidad = map(contador, 0, 80, 0, 255);
    tamTexto = map(contador, 0, 80, 20, 32);

    fill(255, opacidad);
    textFont(fuenteTitulo);
    textAlign(CENTER, CENTER);
    textSize(tamTexto);
    text("La autopista del sur", 625, 110);
  }

  if (contador > 80 && contador < 160) {
    opacidad = map(contador, 80, 160, 0, 255);
    tamTexto = map(contador, 80, 160, 16, 24);

    fill(255);
    textFont(fuenteTitulo);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("La autopista del sur", 625, 110);

    fill(255, opacidad);
    textSize(tamTexto);
    text("Julio Cortázar", 625, 155);
  }

  if (contador >= 160) {
    fill(255);
    textFont(fuenteTitulo);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("La autopista del sur", 625, 110);

    textSize(24);
    text("Julio Cortázar", 625, 155);
  }

  if (contador > 200) {
    dibujarBoton(530, 350, 200, 50, boton[0]);
  }
}

function dibujarPantalla1() {
  image(imagen[1], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[0], 20, 345, 700, 60);
  text(narrativa[1], 20, 375, 700, 60);
  text(narrativa[2], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla2() {
  image(imagen[2], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[3], 20, 345, 700, 60);
  text(narrativa[4], 20, 375, 700, 60);
  text(narrativa[5], 20, 405, 700, 60);

  dibujarBoton(585, 380, 200, 50, boton[2]);
}

function dibujarPantalla3() {
  image(imagen[3], 0, 0, width, height);

  dibujarFondoTexto(0, 265, width, 200);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[6], 20, 275, 700, 60);
  text(narrativa[7], 20, 305, 700, 60);
  text(narrativa[8], 20, 335, 700, 60);

  dibujarBoton(85, 380, 260, 50, boton[3]);
  dibujarBoton(435, 380, 260, 50, boton[4]);
}

function dibujarPantalla4A() {
  image(imagen[4], 0, 0, width, height);

  dibujarFondoTexto(0, 295, width, 155);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[9], 20, 310, 700, 60);
  text(narrativa[10], 20, 340, 700, 60);
  text(narrativa[11], 20, 370, 700, 60);
  text(narrativa[12], 20, 400, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla4B() {
  image(imagen[5], 0, 0, width, height);

  dibujarFondoTexto(0, 360, width, 100);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[13], 20, 375, 700, 60);
  text(narrativa[14], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla5() {
  image(imagen[6], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[15], 20, 345, 700, 60);
  text(narrativa[16], 20, 375, 700, 60);
  text(narrativa[17], 20, 405, 700, 60);

  dibujarBoton(555, 380, 230, 50, boton[5]);
}

function dibujarPantalla6() {
  image(imagen[7], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[18], 20, 325, 700, 60);
  text(narrativa[19], 20, 355, 700, 60);
  text(narrativa[20], 20, 385, 500, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla7() {
  image(imagen[8], 0, 0, width, height);

  dibujarFondoTexto(0, 265, width, 200);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[21], 20, 275, 700, 60);
  text(narrativa[22], 20, 305, 700, 60);
  text(narrativa[23], 20, 335, 700, 60);

  dibujarBoton(85, 380, 260, 50, boton[6]);
  dibujarBoton(435, 380, 260, 50, boton[7]);
}

function dibujarPantalla8A() {
  image(imagen[9], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[24], 20, 325, 700, 60);
  text(narrativa[25], 20, 355, 700, 60);
  text(narrativa[26], 20, 385, 450, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla8B() {
  image(imagen[10], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[27], 20, 325, 700, 60);
  text(narrativa[28], 20, 355, 700, 60);
  text(narrativa[29], 20, 385, 500, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla9() {
  image(imagen[11], 0, 0, width, height);

  dibujarFondoTexto(0, 295, width, 155);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[30], 20, 310, 700, 60);
  text(narrativa[31], 20, 340, 700, 60);
  text(narrativa[32], 20, 370, 700, 60);
  text(narrativa[33], 20, 400, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla10() {
  image(imagen[12], 0, 0, width, height);

  dibujarFondoTexto(0, 265, width, 200);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[34], 20, 275, 700, 60);
  text(narrativa[35], 20, 305, 700, 60);
  text(narrativa[36], 20, 335, 700, 60);

  dibujarBoton(85, 380, 260, 50, boton[8]);
  dibujarBoton(435, 380, 260, 50, boton[9]);
}

function dibujarPantalla11A() {
  image(imagen[13], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[37], 20, 325, 700, 60);
  text(narrativa[38], 20, 355, 500, 60);
  text(narrativa[39], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla11B() {
  image(imagen[14], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[40], 20, 345, 700, 60);
  text(narrativa[41], 20, 375, 700, 60);
  text(narrativa[42], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla12() {
  image(imagen[15], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[43], 20, 345, 700, 60);
  text(narrativa[44], 20, 375, 700, 60);
  text(narrativa[45], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla13() {
  image(imagen[16], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[46], 20, 325, 700, 60);
  text(narrativa[47], 20, 355, 700, 60);
  text(narrativa[48], 20, 385, 500, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla14() {
  image(imagen[17], 0, 0, width, height);

  dibujarFondoTexto(0, 265, width, 200);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[49], 20, 278, 740, 60);
  text(narrativa[50], 20, 305, 740, 60);
  text(narrativa[51], 20, 335, 740, 60);

  dibujarBoton(85, 380, 260, 50, boton[10]);
  dibujarBoton(435, 380, 260, 50, boton[11]);
}

function dibujarFinalAlternativo1() {
  image(imagen[18], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[52], 20, 345, 740, 60);
  text(narrativa[53], 20, 375, 740, 60);
  text(narrativa[54], 20, 405, 740, 60);

  transicionFinal();
}

function dibujarPantalla15() {
  image(imagen[19], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[55], 20, 345, 700, 60);
  text(narrativa[56], 20, 375, 700, 60);
  text(narrativa[57], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla16() {
  image(imagen[20], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[58], 20, 345, 700, 60);
  text(narrativa[59], 20, 375, 700, 60);
  text(narrativa[60], 20, 405, 500, 60);

  dibujarBoton(555, 380, 230, 50, boton[12]);
}

function dibujarPantalla17() {
  image(imagen[21], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[61], 20, 325, 700, 60);
  text(narrativa[62], 20, 355, 400, 60);
  text(narrativa[63], 20, 405, 700, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarPantalla18() {
  image(imagen[22], 0, 0, width, height);

  dibujarFondoTexto(0, 265, width, 200);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[64], 20, 275, 740, 60);
  text(narrativa[65], 20, 305, 740, 60);
  text(narrativa[66], 20, 335, 740, 60);

  dibujarBoton(85, 380, 260, 50, boton[13]);
  dibujarBoton(435, 380, 260, 50, boton[14]);
}

function dibujarFinalOriginal() {
  image(imagen[23], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[67], 20, 325, 740, 60);
  text(narrativa[68], 20, 355, 740, 60);
  text(narrativa[69], 20, 385, 740, 60);

  transicionFinal();
}

function dibujarPantalla19() {
  image(imagen[24], 0, 0, width, height);

  dibujarFondoTexto(0, 310, width, 140);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[70], 20, 325, 700, 60);
  text(narrativa[71], 20, 355, 700, 60);
  text(narrativa[72], 20, 385, 400, 60);

  dibujarBoton(600, 380, 180, 50, boton[1]);
}

function dibujarFinalAlternativo2() {
  image(imagen[25], 0, 0, width, height);

  dibujarFondoTexto(0, 330, width, 120);

  fill(255);
  textFont(fuenteTexto);
  textAlign(LEFT, TOP);
  textSize(18);

  text(narrativa[73], 20, 345, 740, 60);
  text(narrativa[74], 20, 375, 740, 60);
  text(narrativa[75], 20, 405, 740, 60);

  transicionFinal();
}

function dibujarCreditos() {
  image(imagen[26], 0, 0, width, height);

  contador++;

  opacidad = map(contador, 0, 60, 255, 0);
  if (opacidad < 0) {
    opacidad = 0;
  }

  if (contador > 60 && contador < 300) {
    posYTexto = map(contador, 60, 300, 500, 55);
  }

  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);

  textSize(22);
  text("Programación para medios interactivos orientada a las tecnologías web", width / 2, posYTexto);
  text("TP Final Parte #1", width / 2, posYTexto + 35);

  textSize(20);
  text("Producido por Natasha Banegas y Dante Abal", width / 2, posYTexto + 100);

  if (contador > 340) {
    dibujarBoton(300, 350, 200, 50, boton[15]);
  }

  fill(0, opacidad);
  noStroke();
  rect(0, 0, width, height);
}

function transicionFinal() {
  contador++;

  if (contador > 300 && contador < 400) {
    opacidad = map(contador, 300, 400, 0, 255);
  }

  fill(0, opacidad);
  rect(0, 0, width, height);

  if (contador >= 400) {
    pantalla = "creditos";
    contador = 0;
    opacidad = 255;
  }
}

function dibujarFondoTexto(posX, posY, tamX, tamY) {
  fill(0, 180);
  rect(posX, posY, tamX, tamY);
}

function dibujarBoton(posX, posY, tamX, tamY, boton) {
  if (detectarZonaR(posX, posY, tamX, tamY)) {
    fill(250, 250, 100, 200);
    rect(posX - 1, posY - 1, tamX + 2, tamY + 2, 16);
  } else {
    fill(255, 200);
    rect(posX, posY, tamX, tamY, 15);
  }

  fill(0);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(boton, posX + tamX / 2, posY + tamY / 2 - 5);

  noStroke();
}

function detectarZonaR(posX, posY, tamX, tamY) {
  if (mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY) {
    return true;
  } else {
    return false;
  }
}
