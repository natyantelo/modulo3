function Profesor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const profesor1 = new Profesor(`marcos`, 44);
console.log(profesor1.nombre);
profesor1.nombre = `marcos javier`;
console.log(profesor1.nombre);
Profesor.prototype.soyElProfe = function() {
  console.log("Soy el profe" + this.nombre);
};
const profesor2 = new Profesor("andrea", 25);
console.log(profesor2.nombre);
Profesor.prototype.soyElProfe2 = function() {
  console.log("Soy la profe" + this.nombre);
};

Profesor.prototype.cumpleanos = function() {
  this.edad++;
  console.log("cumpleanos: " + this.edad);
};
profesor1.soyElProfe();
profesor2.cumpleanos();
