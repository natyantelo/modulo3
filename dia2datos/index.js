class Poligono {
  constructor(nombre, lados) {
    this.nombre = nombre;
    this.lados = lados;
  }
  getarea() {}
}
class Triangulo extends Poligono {
  constructor(base, altura) {
    super("triangulo", 3);
    this.base = base;
    this.altura = altura;
  }
  getarea() {
    return (this.base * this.altura) / 2;
  }
}
class Rectangulo extends Poligono {
  constructor(base, altura) {
    super("rectangulo", 4);
    this.base = base;
    this.altura = altura;
  }
  getarea() {
    return this.base * this.altura;
  }
}
class Cuadrado extends Rectangulo {
  constructor(lado) {
    super(lado, lado);
    this.nombre = "cuadrado";
  }
}
class Circulo extends Poligono {
  constructor(radio) {
    super("circulo", 1);
    this.radio = radio;
  }
  getarea() {
    return Math.PI * this.radio ** 2;
  }
}
const triangulo = new Triangulo(4, 2);
console.log(triangulo.getarea());
const rectangulo = new Rectangulo(4, 2);
console.log(rectangulo.getarea());
const cuadrado = new Cuadrado(4);
console.log(cuadrado.getarea());
const circulo = new Circulo(4);
console.log(circulo.getarea());
const poligono = new Poligono("figura irregular", 5);
console.log(poligono.getarea());
