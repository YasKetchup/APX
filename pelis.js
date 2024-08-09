//Este módulo tiene que leer el archivos JSON y exponer funciones
//para interactuar con los datos.
const fs = require("fs");
const archivoBuffer = fs.readFileSync(__dirname + "/pelis.json");
const archivoEnTexto = archivoBuffer.toString();
const peliculas = JSON.parse(archivoEnTexto);

function getAll() {
  return peliculas;
}

function ordenar(propiedad) {
  return peliculas.sort((a, b) => {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }

    return 0;
  });
}

function buscarPorTitulo(palabra) {
  for (let index = 0; index < peliculas.length; index++) {
    const element = peliculas[index];
    if (element.title.toLowerCase() === palabra.toLowerCase()) {
      return element;
    }
  }
}

function buscarPorTag(tag) {
  const respuesta = [];
  for (let index = 0; index < peliculas.length; index++) {
    const element = peliculas[index];
    const tags = element.tags;
    if (tags.includes(tag.toLowerCase())) {
      respuesta.push(element);
    }
  }
  return respuesta;
}

module.exports = { getAll, ordenar, buscarPorTitulo, buscarPorTag };
