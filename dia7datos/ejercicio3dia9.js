//SINGLETON

var Singleton = (function() {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

class Singleton2 {
  constructor() {
    this.instance = new Object();
  }
  static createInstance() {
    var object = new Object("I am the new instance");
    return object;
  }
  static getInstance() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }
}

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
