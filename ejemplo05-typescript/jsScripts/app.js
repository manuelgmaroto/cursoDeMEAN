var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//Definiciones de clases
var Persona = (function () {
    // Metodo constructor
    function Persona(nombre, apellido1, apellido2) {
        //Definicion de atributos
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    //Metodos de instancia
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
/*Sin metodo constructor
let manuel = new Persona();
manuel.nombre ="AMnuel";
manuel.apellido1 = "Gonzalez";
manuel.apellido2 = "Maroto";*/
var manuel = new Persona("Manuel", "Gonzalez", "Maroto");
var federico = new Persona("Federico", "Gomez", "Antae");
console.log(manuel.stringify());
console.log(federico.stringify());
//Extendemos las clases con herencia
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, apellido1, apellido2, identidad) {
        _super.call(this, nombre, apellido1, apellido2); //No copiamos el constructor con super hereda el de persona
        this.identidad = identidad; //añadimos lo que tiene 
    }
    /*Lo sobreescribimos */
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + " " + this.identidad;
    };
    return Ciudadano;
}(Persona));
var ciudadanoPepe = new Ciudadano("Pepe", null, null, "1");
console.log(ciudadanoPepe.stringify());
//# sourceMappingURL=app.js.map