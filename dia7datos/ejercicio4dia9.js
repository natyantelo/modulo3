//PATRONES DE DISEÑO
//OBSERVER:: es para gestionar varios objetos a la vez. Funciona para saber cuando alguien hace click por ejemplo para suscribirse a algo
//o para desuscribirse, y la funcion fire lanza un evento donde obejeto es el scope.

function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function(fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function(fn) {
    this.handlers = this.handlers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function(o, thisObj) {
    var scope = thisObj;
    this.handlers.forEach(function(item) {
      item.call(scope, o);
    });
  }
};

// log helper

var log = (function() {
  var log = "";

  return {
    add: function(msg) {
      log += msg + "\n";
    },
    show: function() {
      console.log(log);
      log = "";
    }
  };
})();

var clickHandler = function(item) {
  log.add("fired: " + item);
};

var click = new Click();

click.subscribe(clickHandler);
click.fire("event #1");
click.unsubscribe(clickHandler);
click.fire("event #2");
click.subscribe(clickHandler);
click.fire("event #3");

log.show();
