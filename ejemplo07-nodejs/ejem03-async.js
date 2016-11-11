//require permite cargar modulos, cargamos fs, file system
let fs = require('fs');
let fichero = process.argv[2];
//Lee el fichero de modo asincrono, delega la ejecucion y sigue con el codigo
fs.readFileSync(fichero,miFuncionAsincrona/* callBack */);
function miFuncionAsincrona(error,contenido){
    if(error){
        console.error("Error al ejecutar la funcion asincrona", error);
    }else{
        let numeroDeFilas = contenido.toString().split('\n').length;
        console.log("Filas del fichero " + fichero + "\nLineas " + numeroDeFilas);
    }
}


