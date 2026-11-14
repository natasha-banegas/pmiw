class Ruta {
  constructor() {
    this.vel=8;
    this.lineasY=[0, 100, 200, 300, 400];
  }

  dibujarRuta() {
    background(90);

    fill(200, 180, 50);
    rect(width/2-6, 0, 5, height);
    rect(width/2+1, 0, 5, height);

    fill(255);
    for (let i=0; i<this.lineasY.length; i++) {
      let y=this.lineasY[i];
      rect(197, y, 6, 50);
      rect(597, y, 6, 50);
    }
  }

  moverRuta() {
    for (let i=0; i<this.lineasY.length; i++) {
      this.lineasY[i]+=this.vel;
      if (this.lineasY[i]>height) {
        this.lineasY[i]=-50;
      }
    }
  }
}

class Peugeot {
  constructor(x, y, img) {
    this.posX=x;
    this.posY=y;
    this.tamX=80;
    this.tamY=145;
    this.vel=8;
    this.vida=3;
    this.img=img;
    this.carrilesX=[100, 300, 500, 700];
    this.carrilActual=2;
  }

  actualizar() {
    let objetivoX=this.carrilesX[this.carrilActual];
    this.posX=lerp(this.posX, objetivoX, 0.2);

    if (abs(this.posX-objetivoX)<this.vel) {
      this.posX=objetivoX;
    }
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
    imageMode(CORNER);
  }

  moverIzquierda() {
    if (this.carrilActual>0) {
      this.carrilActual--;
    }
  }

  moverDerecha() {
    if (this.carrilActual<this.carrilesX.length-1) {
      this.carrilActual++;
    }
  }

  recibirGolpe() {
    this.vida--;
  }
}

class AutoObstaculo {
  constructor(x, y, vel, img) {
    this.posX=x;
    this.posY=y;
    this.vel=vel;
    this.img=img;
    this.tamX=75;
    this.tamY=145;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
    imageMode(CORNER);
  }

  mover() {
    this.posY+=this.vel;
  }

  chocarCon(peugeot) {
    let choqueX=abs(this.posX-peugeot.posX)<55;
    let choqueY=abs(this.posY-peugeot.posY)<105;

    if (choqueX && choqueY) {
      return true;
    } else {
      return false;
    }
  }
}

class Dauphine {
  constructor(x, y, img) {
    this.posX=x;
    this.posY=y;
    this.img=img;
    this.tamX=22;
    this.tamY=40;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
    imageMode(CORNER);
  }
}
