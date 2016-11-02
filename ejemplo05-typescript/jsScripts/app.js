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
//funcion que puedo usar en cualquier lado
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3 :" + funcionLambda(1, 3));
var PI = 3.141592654;
//PI = 23; //No lo permite
//Deestructuracion conjunto de varriables. Deshace el objeto y lo convierte en variables sueltas
var _a = { variable1: "valor1", variable2: "valor2" }, variable1 = _a.variable1, variable2 = _a.variable2;
console.log(variable1);
console.log(variable2);
/// gestion parametros con ...
function dameLosCamposporConsola(campo1, campo2) {
    var elRestoDecampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDecampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDecampos);
    console.log("for--in");
    for (var posicion in elRestoDecampos) {
        console.log("El campo en la posicion: " + posicion + " es " + elRestoDecampos[posicion]);
    }
    console.log("for--of");
    for (var _a = 0, elRestoDecampos_1 = elRestoDecampos; _a < elRestoDecampos_1.length; _a++) {
        var campo = elRestoDecampos_1[_a];
        console.log("El campo es: " + campo);
    }
}
dameLosCamposporConsola("uno", 2, "tres", "cuatro", 5, "seis");
//Para campos en los  que se usa unos campos concretos
var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 7] = "Calle";
    TipoDeVia[TipoDeVia["Via"] = 8] = "Via";
    TipoDeVia[TipoDeVia["Rua"] = 9] = "Rua";
    TipoDeVia[TipoDeVia["Plaza"] = 10] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 11] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 12] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 13] = "Carretera";
})(TipoDeVia || (TipoDeVia = {}));
var Puntos;
(function (Puntos) {
    Puntos[Puntos["TouchDown"] = 5] = "TouchDown";
    Puntos[Puntos["Goal"] = 3] = "Goal";
})(Puntos || (Puntos = {}));
var miTipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via : " + miTipoDeVia);
console.log("Tipo de via: " + TipoDeVia[miTipoDeVia]);
//creo una funcion para  comparar
var TipoDeVia;
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var avenida = TipoDeVia.esAvenida("Avd");
//invierte cualquier tipo de array...
//Es un generico que puede usarse pra cualquier tipo que se define cuando se va a usar
function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
console.log(invertir(["uno", "dos"]));
//DAO generico que permite dar de alta y de baja lo que sea
var DAOGenerico = (function () {
    function DAOGenerico() {
    }
    DAOGenerico.prototype.stringfy = function (objeto) {
        return objeto + "";
    };
    return DAOGenerico;
}());
var PersonaDAO = (function (_super) {
    __extends(PersonaDAO, _super);
    function PersonaDAO() {
        _super.apply(this, arguments);
    }
    PersonaDAO.prototype.add = function (persona) {
        this.personas.push(persona);
    };
    PersonaDAO.prototype.del = function (persona) {
        //recorrer, buscar y eliminar
    };
    return PersonaDAO;
}(DAOGenerico));
var dao = null;
dao.add(new Persona("", "", ""));
//# sourceMappingURL=app.js.map