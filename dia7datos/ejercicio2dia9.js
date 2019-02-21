//PATRONES DE DISEÑO
//Prototype Design Pattern

function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function() {
    var customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;

  this.say = function() {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}

var proto = new Customer("n/a", "n/a", "pending");
var prototype = new CustomerPrototype(proto);

var customer = prototype.clone();
customer.first = "Marcos";
customer.last = "Martinez";
customer.status = "Comprado";
customer.say();

var customer2 = prototype.clone();
customer2.first = "Alberto";
customer2.last = "Ramos";
customer2.status = "Listo";
customer2.say();
