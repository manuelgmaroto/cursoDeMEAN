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
//polimorfismo: es ciudadano y persona a la vez
var ciudadanoPepe = new Ciudadano("Pepe", null, null, "1");
console.log(ciudadanoPepe.stringify());
var SerVivo = (function () {
    function SerVivo(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    SerVivo.prototype.stringify = function () {
        return "clasificacion" + this.clasificacion;
    };
    SerVivo.totalDeSeresVivos = 0;
    return SerVivo;
}());
var pez1 = new SerVivo("marino");
var pez2 = new SerVivo("marino");
var pez3 = new SerVivo("marino");
var tigre = new SerVivo("terrestre");
var leon = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);
//Tenemos que crear metodos de acceso, cada campo con un visivilidad distinta
//desde la instancia los privados no son accesibles
var Padre = (function () {
    function Padre() {
    }
    return Padre;
}());
var padre = new Padre();
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre() {
        _super.call(this);
    }
    return HijoDePadre;
}(Padre));
var Ser = (function () {
    function Ser(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    Ser.prototype.stringify = function () {
        return "clasificacion" + this.clasificacion;
    };
    Ser.totalDeSeres = 0;
    return Ser;
}());
var Politico = (function (_super) {
    __extends(Politico, _super);
    function Politico() {
        _super.call(this, "hola");
    }
    Politico.prototype.desplazamiento = function () {
        return "En coche oficial";
    };
    Politico.prototype.alimentarse = function () {
        return "Dame dinero en sobre";
    };
    return Politico;
}(Ser));
//let ser1: Ser= new Ser(); esto no se puede
var politico = new Politico();
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3 :" + funcionLambda(1, 3));
//# sourceMappingURL=app.js.map