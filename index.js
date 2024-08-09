//Este módulo recibe argumentos, los procesa y delega acciones a Pelis.js
const funciones = require("./pelis.js");

const propiedad = process.argv[2];
const argumento = process.argv[3];

function ejecutorDeFunciones() {
  if (propiedad === "--sort") {
    return console.table(funciones.ordenar(argumento));
  } else if (propiedad === "--search") {
    return console.table(funciones.buscarPorTitulo(argumento));
  } else if (propiedad === "--tag") {
    return console.table(funciones.buscarPorTag(argumento));
  } else if (!argumento && !propiedad) {
    return console.table(funciones.getAll());
  } else {
    console.log("Error: estas insertando mal el elemento a filtrar");
  }
}

function main() {
  ejecutorDeFunciones();
}

main();
