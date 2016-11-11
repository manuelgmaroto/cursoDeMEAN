let fs = require('fs');
let path = require("path");
let directorio = process.arg[2];
fs.readDir(directorio,operarConResultados);
function operarConResultados(error,ficheros){
    if(error){
        console.error("Que habra pasado",error);
    }else{
        
    }
}