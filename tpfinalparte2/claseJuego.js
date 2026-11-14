class Juego {
  constructor() {
    this.pantalla="inicio";
    this.jugador=null;
    this.ruta=null;
    this.dauphine=null;
    this.obstaculos=[];
    this.distancia=0;
    this.contadorAutos=0;

    this.imagenPortada=null;
    this.imagenPeugeot=null;
    this.imagenDauphine=null;
    this.imagenTuerca=null;
    this.imagenCreditos=null;
    this.imagenInstrucciones=null;
    this.imagenGanaste=null;
    this.imagenPerdiste=null;
    this.imagenesObstaculosI=[];
    this.imagenesObstaculosD=[];

    this.sonidoChoque=null;
    this.sonidoClick=null;
    this.sonidoAmbiente=null;

    this.posYCreditos=250;
  }

  cargarRecursos() {
    this.imagenPortada=loadImage("data/imagenes/portada.png");
    this.imagenPeugeot=loadImage("data/imagenes/peugeot.png");
    this.imagenDauphine=loadImage("data/imagenes/dauphine.png");
    this.imagenTuerca=loadImage("data/imagenes/mecanica.png");
    this.imagenCreditos=loadImage("data/imagenes/creditos.png");
    this.imagenInstrucciones=loadImage("data/imagenes/instrucciones.png");
    this.imagenGanaste=loadImage("data/imagenes/ganaste.png");
    this.imagenPerdiste=loadImage("data/imagenes/perdiste.png");

    for (let i=0; i<5; i++) {
      this.imagenesObstaculosI[i]=loadImage("data/imagenes/obstaculoI"+i+".png");
      this.imagenesObstaculosD[i]=loadImage("data/imagenes/obstaculoD"+i+".png");
    }

    this.sonidoChoque=loadSound("data/sonidos/choque.mp3");
    this.sonidoClick=loadSound("data/sonidos/click.mp3");
    this.sonidoAmbiente=loadSound("data/sonidos/ambiente.mp3");
  }

  iniciar() {
    this.pantalla="inicio";
  }

  comenzarJuego() {
    this.jugador=new Peugeot(width/2+100, height-80, this.imagenPeugeot);
    this.ruta=new Ruta();
    this.dauphine=new Dauphine(width-45, 35, this.imagenDauphine);
    this.obstaculos=[];
    this.distancia=0;
    this.contadorAutos=0;
    this.pantalla="juego";

    if (this.sonidoAmbiente.isLoaded() && !this.sonidoAmbiente.isPlaying()) {
      this.sonidoAmbiente.loop();
    }
  }

  detenerAmbiente() {
    if (this.sonidoAmbiente.isLoaded() && this.sonidoAmbiente.isPlaying()) {
      this.sonidoAmbiente.stop();
    }
  }

  reproducirClick() {
    if (this.sonidoClick.isLoaded()) {
      this.sonidoClick.play();
    }
  }

  actualizar() {
    if (this.pantalla=="creditos") {
      this.posYCreditos-=0.5;
      if (this.posYCreditos<100) {
        this.posYCreditos=100;
      }
    }

    if (this.pantalla=="juego") {
      this.ruta.moverRuta();
      this.jugador.actualizar();

      this.contadorAutos++;
      if (this.contadorAutos>=35) {
        this.contadorAutos=0;

        let carril=int(random(4));
        let numeroImagen=int(random(5));
        let imagen;
        let velocidad;

        if (carril<2) {
          imagen=this.imagenesObstaculosI[numeroImagen];
          velocidad=this.velocidadIzquierda();
        } else {
          imagen=this.imagenesObstaculosD[numeroImagen];
          velocidad=this.velocidadDerecha();
        }

        let nuevoAuto=new AutoObstaculo(this.jugador.carrilesX[carril], -100, velocidad, imagen);
        this.obstaculos.push(nuevoAuto);
      }

      for (let i=this.obstaculos.length-1; i>=0; i--) {
        let obs=this.obstaculos[i];
        obs.mover();

        if (obs.chocarCon(this.jugador)) {
          this.jugador.recibirGolpe();
          this.obstaculos.splice(i, 1);

          if (this.sonidoChoque.isLoaded()) {
            this.sonidoChoque.play();
          }
        } else if (obs.posY>height+100) {
          this.obstaculos.splice(i, 1);
          this.distancia+=10;
        }
      }

      if (this.distancia>=600) {
        this.detenerAmbiente();
        this.pantalla="ganaste";
      }

      if (this.jugador.vida<=0) {
        this.detenerAmbiente();
        this.pantalla="perdiste";
      }
    }
  }

  velocidadIzquierda() {
    if (this.distancia>=400) {
      return 14;
    } else if (this.distancia>=200) {
      return 12;
    } else {
      return 10;
    }
  }

  velocidadDerecha() {
    if (this.distancia>=400) {
      return 12;
    } else if (this.distancia>=200) {
      return 10;
    } else {
      return 8;
    }
  }

  dibujar() {
    if (this.pantalla=="inicio") {
      this.dibujarInicio();
    } else if (this.pantalla=="instrucciones") {
      this.dibujarInstrucciones();
    } else if (this.pantalla=="creditos") {
      this.dibujarCreditos();
    } else if (this.pantalla=="juego") {
      this.dibujarJuego();
    } else if (this.pantalla=="ganaste") {
      this.dibujarGanaste();
    } else if (this.pantalla=="perdiste") {
      this.dibujarPerdiste();
    }
  }

  dibujarInicio() {
    image(this.imagenPortada, 0, 0, width, height);

    fill(0, 180);
    noStroke();
    rect(0, 0, 380, 400);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("ACELERÁZAR", 185, 100);

    this.dibujarBoton(60, 180, 250, 45, "JUGAR");
    this.dibujarBoton(60, 240, 250, 45, "CREDITOS");
  }

  dibujarInstrucciones() {
    image(this.imagenInstrucciones, 0, 0, width, height);

    fill(0, 180);
    noStroke();
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("INSTRUCCIONES", width/2, 65);

    textSize(17);
    text("Esquiva los autos que aparecen en la ruta.", width/2, 140);
    text("Usa las flechas (← / →) o las teclas A y D para cambiar de carril.", width/2, 175);
    text("Tenes 3 vidas para llegar hasta el Dauphine.", width/2, 210);
    text("Alcanza los 600 metros para ganar.", width/2, 245);

    this.dibujarBoton(300, 320, 200, 45, "COMENZAR");
  }

  dibujarCreditos() {
    image(this.imagenCreditos, 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("CREDITOS", width/2, 65);

    textSize(18);
    text("Trabajo Practico Final - PMIW", width/2, this.posYCreditos+50);
    text("Basado en 'La autopista del sur' de Julio Cortázar", width/2, this.posYCreditos+85);
    text("Desarrollado por Banegas Natasha & Abal Dante", width/2, this.posYCreditos+120);

    this.dibujarBoton(300, 330, 200, 45, "VOLVER");
  }

  dibujarJuego() {
    this.ruta.dibujarRuta();

    for (let i=0; i<this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
    }

    this.jugador.dibujar();

    for (let i=0; i<this.jugador.vida; i++) {
      image(this.imagenTuerca, 20+i*40, 15, 30, 30);
    }

    this.dauphine.dibujar();

    fill(255);
    textAlign(RIGHT, CENTER);
    textSize(18);
    text(this.distancia+" / 600 m", width-65, 36);
  }

  dibujarGanaste() {
    image(this.imagenGanaste, 0, 0, width, height);

    fill(0, 180);
    noStroke();
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(35);
    text("¡ENCONTRASTE EL DAUPHINE!", width/2, 100);

    textSize(20);
    text("Lograste esquivar el tráfico y llegaste al objetivo", width/2, 160);

    this.dibujarBoton(300, 240, 200, 45, "VOLVER A JUGAR");
    this.dibujarBoton(300, 300, 200, 45, "INICIO");
  }

  dibujarPerdiste() {
    image(this.imagenPerdiste, 0, 0, width, height);

    fill(0, 180);
    noStroke();
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(35);
    text("FIN DEL VIAJE", width/2, 100);

    textSize(20);
    text("Chocaste demasiadas veces y volcaste en la autopista", width/2, 160);

    this.dibujarBoton(300, 240, 200, 45, "VOLVER A JUGAR");
    this.dibujarBoton(300, 300, 200, 45, "INICIO");
  }

  dibujarBoton(x, y, ancho, alto, textoBoton) {
    let hover=this.detectarZonaR(mouseX, mouseY, x, y, ancho, alto);

    if (hover) {
      fill(255);
    } else {
      fill(220, 200, 160);
    }

    noStroke();
    rect(x, y, ancho, alto);

    fill(30);
    textAlign(CENTER, CENTER);
    textSize(17);
    text(textoBoton, x+ancho/2, y+alto/2);
  }

  detectarZonaR(mousePosX, mousePosY, x, y, ancho, alto) {
    if (mousePosX>x && mousePosX<x+ancho && mousePosY>y && mousePosY<y+alto) {
      return true;
    } else {
      return false;
    }
  }

  mousePresionado(mousePosX, mousePosY) {
    let hizoClick=false;

    if (this.pantalla=="inicio") {
      if (this.detectarZonaR(mousePosX, mousePosY, 60, 180, 250, 45)) {
        this.pantalla="instrucciones";
        hizoClick=true;
      } else if (this.detectarZonaR(mousePosX, mousePosY, 60, 240, 250, 45)) {
        this.posYCreditos=250;
        this.pantalla="creditos";
        hizoClick=true;
      }
    } else if (this.pantalla=="instrucciones") {
      if (this.detectarZonaR(mousePosX, mousePosY, 300, 320, 200, 45)) {
        this.comenzarJuego();
        hizoClick=true;
      }
    } else if (this.pantalla=="creditos") {
      if (this.detectarZonaR(mousePosX, mousePosY, 300, 330, 200, 45)) {
        this.pantalla="inicio";
        hizoClick=true;
      }
    } else if (this.pantalla=="ganaste" || this.pantalla=="perdiste") {
      if (this.detectarZonaR(mousePosX, mousePosY, 300, 240, 200, 45)) {
        this.comenzarJuego();
        hizoClick=true;
      } else if (this.detectarZonaR(mousePosX, mousePosY, 300, 300, 200, 45)) {
        this.detenerAmbiente();
        this.pantalla="inicio";
        hizoClick=true;
      }
    }

    if (hizoClick) {
      this.reproducirClick();
    }
  }

  teclaPresionada(tecla) {
    if (this.pantalla=="juego") {
      if (tecla==LEFT_ARROW || tecla==65) {
        this.jugador.moverIzquierda();
      } else if (tecla==RIGHT_ARROW || tecla==68) {
        this.jugador.moverDerecha();
      }
    }
  }
}
