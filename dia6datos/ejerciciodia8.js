/*function cuenta(str1){

var str1="Esta es una frase con espacios";
}
cuenta("Esta es una frase con espacios");*/

/*function factorial(numero) {
  console.log(numero);

  if (numero == 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}
var total = factorial(5);
console.log(total);

//5*4*3*2*1

//0! =1;*/

/*function ranged(a, b) {
  var nextValue = a + 1;

  if (nextValue == b) {
    return "]";
  } else {
    var siguiente = ranged(nextValue, b);

    return nextValue + " ," + siguiente;
  }
}

var result = ranged(2, 9);
console.log(result);*/
let n = 3;

let arr = Array(n);

arr[0] = "4 6 -1".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[1] = "7 2 4".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[2] = "10 4 3".split(" ").map(arrTemp => parseInt(arrTemp, 10));

const result = diagonalDifference(arr);
console.log(result);

//(4+2+3) - (10+2-1)

function diagonalDifference(arr) {
  var total = 0;
  var diagonal1 = 0;
  var diagonal2 = 0;
  //recorrer el array de filas
  for (let fila = 0; fila < arr.length; fila++) {
    console.log(fila);
    const todalafila = arr[fila];
    for (let columna = 0; columna < todalafila.length; columna++) {
      let valor = todalafila[columna];
      if (fila == columna) {
        diagonal1 = diagonal1 + valor;
        console.log("Diagonal1=" + diagonal1);
      }
      //si indice de la columna +indice de la fila=length -1
      if (fila + columna == arr.length - 1) {
        diagonal2 = diagonal2 = valor;
        console.log("Diagonal2=" + diagonal2);
      }
    }
  }
  //para cada fila tenemos que recorrer el array de columnas
  //si el indice de la columna = al indice de la fila lo sumamos a diagonal 1

  total = diagonal1 - diagonal2;
  return total;

  return 3;
}
