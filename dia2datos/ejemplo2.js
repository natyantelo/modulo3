class Cuenta {
  constructor(librodecuentas, nombre) {
    this.librodecuentas = librodecuentas;
    this.nombre = nombre;
  }
}

class Banco {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }

}
  addTransaccion(transaccion) {
    this.transaccion.push(transaccion);
  }
  calculaAmountForAccount(account) {
    return this.transaccion.reduce((cantidad, transaccion) => {
      if (transaccion.remitente == cuenta) {
        cantidad -= transaccion.cantidad;
      }
      if (transaccion.recibir == cuenta) {
        cantidad += transaccion.cantidad;
      }
      return cantidad;
    }, 0);
  }

  findTransactionsForAccount(cuenta) {
    return this.transaccion.filter(transaccion => {
      if (transaccion.remitente == cuenta || transaccion.receptor == cuenta) {
        return true;
      } else {
        return false;
      }
    });
  }
}

class Transaccion {
  constructor(remitente, receptor, cantidad, referencia) {
    this.remitente = remitente;
    this.receptor = receptor;
    this.cantidad = cantidad;
    this.referencia = referencia;
  }
}
class CuentaPersonal extends Cuenta {
  constructor(banco, nombre) {
    super();
    this.banco = banco;
    this.nombre = nombre;
  }
  get tarifa() {
    return 0.01;
  }
}
class CuentaComercial extends Cuenta {
  constructor(banco, nombre) {
    super();
    this.banco = banco;
    this.nombre = nombre;
  }
  get tarifa() {
    return 0.02;
  }
}

const banco1 = new Banco("bbva");
console.log(banco1);
const cuentapersonal = new CuentaPersonal(banco1, "referencia");
console.log(cuentapersonal);
const cuentacomercial = new CuentaComercial(banco1, "referencia");
console.log(cuentacomercial);
const transaccion1 = new Transaccion(
  cuentapersonal,
  cuentacomercial,
  1000,
  banco1
);
console.log(transaccion1);
