let variable = 2016;
//variable = "texto";
//si en tsconfig ponemos es6 mantiene el let

var otraVariable:number = 7;
otraVariable = 14;
//otraVariable = '17';

// tipos
interface Tiempo {
    dia : number;
    mes : number;
    anio : number;
}

var miCumpleanios : Tiempo = {dia:12,mes:2,anio:1232};
console.log("El dia de mi cumplaños es " + miCumpleanios.dia);
console.log("Antes de cumplir años : " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("Despues de cumplir años : " + miCumpleanios.anio);

function cumplirAnios(fechaDeCumpleanios:Tiempo):void{
    fechaDeCumpleanios.anio++;
}

