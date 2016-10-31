var variable = 2016;
//variable = "texto";
//si en tsconfig ponemos es6 mantiene el let
var otraVariable = 7;
otraVariable = 14;
var miCumpleanios = { dia: 12, mes: 2, anio: 1232 };
console.log("El dia de mi cumplaños es " + miCumpleanios.dia);
console.log("Antes de cumplir años : " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("Despues de cumplir años : " + miCumpleanios.anio);
function cumplirAnios(fechaDeCumpleanios) {
    fechaDeCumpleanios.anio++;
}
//# sourceMappingURL=app.js.map