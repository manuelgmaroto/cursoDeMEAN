//require permite cargar modulos, cargamos fs, file system
let fs = require('fs');
let fichero = process.argv[2];
//Lee el fichero de modo asincrono
let contenido = fs.readFileSync(fichero);
let numeroDeFilas = contenido.toString().split('\n').length;
console.log("Filas del fichero " + fichero + "\nLineas " + numeroDeFilas);