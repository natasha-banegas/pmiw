# La autopista del sur - TP Final Etapa 1

**Alumnos:** Natasha Banegas y Dante Abal.

**Video explicativo:** [https://youtu.be/fAjdjm0wRak](https://youtu.be/fAjdjm0wRak)

## Archivos del proyecto

- `index.html` → carga p5.js y el sketch.
- `sketch.js` → todo el código del programa.
- `data/img/portada.jpg` → imagen de la portada.
- `data/txt/botones.txt` → textos de los botones.
- `data/txt/narrativa.txt` → todos los párrafos de la historia.

## Cómo funciona el código

### Variables principales

- `pantalla`: número que dice en qué pantalla estamos.  
  - `0` = portada  
  - `1` a `25` = pantallas de la historia
- `portada`, `botones`, `narrativa`: guardan la imagen y los textos cargados.
- `inicioNarrativa` y `finNarrativa`: arrays que indican qué líneas de `narrativa.txt` se muestran en cada pantalla.

### preload()

Carga la imagen de portada y los dos archivos de texto antes de que arranque todo.

### setup()

Crea el canvas de 800x450, pone `pantalla = 0` y define los arrays `inicioNarrativa` y `finNarrativa`.

### draw()

Según el valor de `pantalla`:
- Si es `0`, dibuja la portada.
- Si es otra cosa, dibuja la pantalla narrativa.

### Funciones

- `dibujarPantallaInicio()`: muestra la portada, el título, el autor y el botón "Comenzar".
- `dibujarPantallaNarrativa()`: muestra los párrafos que corresponden a la pantalla actual y dibuja el botón "Continuar" (o dos botones en la pantalla 3).
- `dibujarBoton(posX, posY, tamX, tamY, nombre)`: dibuja un rectángulo blanco con un texto centrado.
- `detectarZonaR(posX, posY, tamX, tamY)`: devuelve `true` si el mouse está dentro del rectángulo. Sirve para saber si se hizo clic en un botón.

### mousePressed()

Maneja los clics:
- En la portada, si se hace clic en "Comenzar", pasa a `pantalla = 1`.
- En la pantalla 3 hay dos botones: uno lleva a la pantalla 4 y el otro a la 5.
- En el resto, si se hace clic en "Continuar", avanza sumando 1 a `pantalla`.
