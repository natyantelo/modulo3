/*Creación de un generador de cuentas bancarias y clientes
	Factoria:Banco
    Clase:Cuenta, Clientes*/

class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.listadeCliente = [];
    this.listadeCuentas = [];
    this.listasuscriptorespubli = [];
    this._cuentaBase = null;
  }
  CrearComision(cuentaBase) {
    this._cuentaBase = cuentaBase;
  }

  CrearCuentaComision(cliente) {
    const nuevaCuenta = new Cuenta(cliente, this);
    nuevaCuenta.Comision = this._cuentaBase.Comision;
    return nuevaCuenta;
  }

  /*crear una funcion que le añada a la 
  cuenta base el valor de la comision*/

  LanzarPublicidad(cliente) {}
  CrearCuenta(cliente) {
    let nuevaCuenta = this.CrearCuentaComision(cliente);

    let isClient = false;

    cliente.AddCuenta(nuevaCuenta);
    this.listadeCuentas.push(nuevaCuenta);

    for (let valor of this.listadeCliente) {
      if (value == cliente) {
        isClient = true;
      }
    }
    if (isClient == false) {
      this.listadeCliente.push(cliente);
    }

    return nuevaCuenta;
  }
  CrearCliente(nombre) {
    let nuevoCliente = new Clientes(nombre);
    this.listadeCliente.push(nuevoCliente);
    return nuevoCliente;
  }
  Suscribirse(cliente) {
    this.listasuscriptorespubli.push(cliente);
  }

  Desuscribirse(cliente) {
    this.listasuscriptorespubli = this.listasuscriptorespubli.filter(function(
      item
    ) {
      if (item !== cliente) {
        return item;
      }
    });
  }
  GetSaldoTotal() {}

  LanzarPublicidad(bocetospublicidad) {
    this.listasuscriptorespubli.forEach(function(item) {
      item.leerpublicidad(bocetospublicidad);
    });
  }
  AddCuenta(cuenta) {
    this.listadeCuentas.push(cuenta);
  }
}

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = null;
  }

  get Comision() {
    return this._comision;
  }
  set Comision(nuevaComision) {
    this._comision = nuevaComision;
  }
}

class Clientes {
  constructor(nombre) {
    this.nombre = nombre;
    this.listadeCuentas = [];
  }

  LeerPublicidad(bocetospublicidad) {
    console.log(
      this.nombre,
      " ha leido los bocetos que contienen el mensaje ",
      evento
    );
  }
}

let banco1 = new Banco("BBVA");
console.log(banco1);
const cuentaComision = new Cuenta(null, banco1);
cuentaComision.Comision = 5;
banco1.CrearComision(cuentaComision);

let cliente1 = new Clientes("Francisco");
console.log(cliente1);
banco1.CrearCuenta(cliente1);
let cliente2 = banco1.CrearCliente("NataliaAntelo");
console.log(cliente2);
console.log(banco1);

/* 
Añadir un prototype de tipo de cuenta en el que se establezca el valor de la comisión por defecto.	

Añadir a la clase Banco un evento EnviarPublicidad
subscribir al evento de lanzar publicidad a Varios clientes
funcion en cada cliente :leer publicidad


Crear un singleton que genere la misma instancia del banco (la factoría del punto 1)


La clase Cuenta tendrá: 
	-Objeto Cliente
	-Objeto Banco
	-Propiedad Saldo

La clase Cliente tendrá::
	- Lista de Cuentas
	- Función GetSaldoTotal
	- Leer publicidad
	
 La clase banco	
	- Nombre
	- Lista de cuentas
	- Función LanzaarPublicidad (texto publicidad)
	- Lista de clientes que aceptan publicidad (observer)
*/
