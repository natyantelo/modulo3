class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const producto1 = new Product("seat", 2000);
console.log(producto1);

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}


class Basket {
  constructor() {
    this.products = [];
  }
  addProduct(amount, product) {
    //creo un array  del amount elementos
    //si amount vale 20 creo un array de 20 elementos
    // con .fill añado en cada hueco del array
    // una copia del  producto que le he pasado como parametro
    //una vez que tengo el array de amount elementos donde cada hueco tiene una copia
    // del producto lo añado al array this.products.
    this.products.push(...Array(amount).fill(product));
  }

  addProductSimpleWay(cantidad, producto)
  {
    //Que tiene que hacer esto?
    // ESto añade en nuestra variable products objetos del tipo producto 
    // añade tantas veces como cantidad
    //vamos a añadir productos tantas veces como cantidad
    // si cantidad vale 0 no añadimos
    // si vale 1 añadimos 1 vez

    for (x=0;x<cantidad;x++)
    {
      // añadimos el producto
      this.products.push(producto);
    }


  }
 calcularTotal()
 { 
  // creamoooos una variable resultado donde vamos a guardar la suma del precio de los productos  
  let resultado;
  // inicialimos resultado a 0
  resultado=0;
  //Para cada producto que tenemos el array products
  for (x=0;x<this.products.length;x++)
  {
    //sumamos el precio en resultado
    resultado=resultado+this.products[x].price;
  }
  //devolvemos la suma de todos los precios
  return resultado;
 }


  calcTotal() {
    return this.products
      .map(product => product.price
      .reduce((a, b) => a + b, 0);
  }
  printShoppingInfo() {
    console.log(`one has to play in total:` + this.calcTotal());
  }
}


const bread = new Product(`bread`, 1);
const water = new Product(`water`, 0.25);
const faust = new Book(`faust`, 12.5, `Goethe`);
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.addProduct(4, faust);
basket.printShoppingInfo();
