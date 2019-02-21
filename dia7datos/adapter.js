var Target = Class({
  create: function() {},
  Request: function() {}
});

var Adapter = Class({
  create: function() {
    facade.log("Adaptee created");
  },
  SpecificRequest() {
    facade.log("Adaptee request");
  }
}

class Adapter {
    constructor(clase){
        this.clase;
    }

Create() {
    facade.log("Adapter created");
  }
Request(){
    this.

}

Adapter.prototype.Request = function() {
  this.SpecificRequest();
};

var a = new Target();
a.SpecificRequest();
  var f = new Adapter();
  f.Request();

