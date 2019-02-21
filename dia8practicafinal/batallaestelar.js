class Nave {
  constructor(dano, puntosvida, codigo) {
    this.dano = dano;
    this.puntosvida = puntosvida;
    this.codigo = codigo;
  }

  get Estado() {
    if (this.puntosvida <= 0) {
      return "destruido";
    } else {
      return "activo";
    }
  }

  recibirdisparo(dano) {
    this.puntosdevida = this.puntosdevida - dano;
    return this.puntosdevida;
  }
}
class Nave1 extends Nave {
  constructor() {
    super(10, 5, "Nave1 Santa Maria");
  }
}

class Nave2 extends Nave {
  constructor() {
    super(5, 10, "Nave2 Pinta");
  }
}
class Nave3 extends Nave {
  constructor() {
    super(8, 7, "Nave3 Niña");
  }
}
class Ejercito {
  constructor(nombre) {
    this.nombre = nombre;
    this.listanaves = [];
  }

  CrearInforme() {
    let supervivientes = this.listanaves.filter(
      item => item.Estado == "activo"
    );
    let destruidas = this.listanaves.filter(item => item.Estado == "destruido");
    console.log(
      "las unidades supervivientes son",
      supervivientes.length,
      "y las destruidas son",
      destruidas.length
    );
  }

  get Derrotado() {
    let isderrotado = true;
    for (let value of this.listanaves) {
      if (value.Estado == "activo") {
        isderrotado = false;
      }
    }
    if (isderrotado == true) return true;
    else return false;
  }
}
class Generador {
  constructor() {}

  CrearEjercito(nombre, cantclase1, cantclase2, cantclase3) {
    let listanaves = [];

    for (let i = 0; i < cantclase1; i++) {
      listanaves.push(new Nave1());
    }

    for (let i = 0; i < cantclase2; i++) {
      listanaves.push(new Nave2());
    }
    for (let i = 0; i < cantclase3; i++) {
      listanaves.push(new Nave3());
    }
    var ejercito = new Ejercito(nombre);
    ejercito.listanaves = listanaves;
    return ejercito;
  }

  DistribuirEjercito(campoBatalla, ejercito) {
    campoBatalla.DesplegarEjercito(ejercito);
  }
  CrearCampoBatalla(ejercito1, ejercito2) {
    let campoatalla = new CampoBatalla();
    this.DistribuirEjercito(campoBatalla, ejercito1);
    this.DistribuirEjercito(campoBatalla, ejercito2);
    return CampoBatalla;
  }
}

class CampoBatalla {
  constructor() {
    this.listaejercitos = [];
    this.listaSectores = [];
  }
  DesplegarEjercito(ejercito) {
    this.listaejercitos.push(ejercito);
    const nuevoSector = new Sector();
    nuevoSector.espacios = ejercito.listanaves;
    this.listaSectores.push(nuevoSector);
  }

  SeleccionarObjetivo(posicion) {
    for (let value of this.listaSectores[posicion].espacios) {
      if (value.Estado == "activo") {
        return value;
      }
    }
  }
  SeleccionarAtacante(posicion) {
    for (let value of this.listaSectores[posicion].espacios) {
      if (value.Estado == "activo") {
        return value;
      }
    }
  }
  disparar(posicion_ataca, posicion_defiende) {
    let Objetivo = this.SeleccionarObjetivo(posicion_defiende);
    let Atacante = this.SeleccionarAtacante(posicion_ataca);
    Objetivo.recibirdisparo(Atacante.dano);
  }
  EmpezarPartida() {
    while (true) {
      this.disparar(0, 1);
      this.listaejercitos[1].CrearInforme();
      if (this.listaejercitos[1].Derrotado) {
        console.log(this.listaejercitos[0].nombre, "ganador");
        break;
      }

      this.disparar(1, 0);
      this.listaejercitos[0].CrearInforme();
      if (this.listaejercitos[0].Derrotado) {
        console.log(this.listaejercitos[1].nombre, "ganador");
        break;
      }
    }
  }
}

class Sector {
  constructor() {
    this.espacios = [];
  }

  ObtenerElementosEnPosicion(posicion) {
    return this.espacios[Posicion];
  }
}

let generador = new Generador();
const campoBatalla = new CampoBatalla();
let ejercito1 = generador.CrearEjercito("Blanco", 3, 5, 7);
let ejercito2 = generador.CrearEjercito("Negro", 3, 5, 7);
console.log(ejercito1);
console.log(ejercito2);
generador.DistribuirEjercito(campoBatalla, ejercito1);
generador.DistribuirEjercito(campoBatalla, ejercito2);
campoBatalla.EmpezarPartida();

//console.log(GeneradorNaves);
//
// let nave1 = new Nave1();
// console.log(Nave1);
// let nave2 = new Nave2();
// console.log(Nave2);
// let nave3 = new Nave3();
// console.log(Nave3);
// let ejercito1 = new Ejercito1();
// console.log(Ejercito1);
// let ejercito2 = new Ejercito2();
// console.log(Ejercito2);
