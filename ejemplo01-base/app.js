/*console.log("Hola mundo!");
variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global";

//Va a funcionar la llamda aqui porque las funciones estan cargadas
mi_funcion_con_var();
mi_funcion_con_let();

function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local";
    for (var i = 0; i<10; i++){
        console.log("valor de i " +i);
    }
    console.log("Valor de i al final " + i);
}

function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local";
    for (let i = 0; i<10; i++){ //let hace que solo viva dentro del bucle for
        console.log("valor de i " +i);
    }
    //TODO: Buscar una condicion para evaluar si la variable existe
    //console.log("Valor de i al final " + i);
}

console.log("Tipos de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "siete";
var fechaDeEstreno = new Date();//2016
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("Fecha de estreno " + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
function cambiarYear(fecha){
    //TODO: asegurarse de que lo que llega es de tipo fecha
    fecha.setFullYear(2011);
    console.log("Fecha de la funcion " + fecha.getFullYear());
}
console.log("Fecha de la funcion "+ otraFecha.getFullYear());
var fechas = new Array();
console.log("Resultado typeof numerico " + typeof tipoDeDatoNumerico);
console.log("Resultado typeof cadena" + typeof tipoDeDatoCadena);
console.log("Resultado de new Date()" + typeof fechaDeEstreno); //typeof no funciona con objetos, solo con tipos primitivos. Usamos instanceof
pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);//No tiene metodo setter
    console.log("Valor almacenado " + numero.valueOf());
    console.log("Valor almacenado " + numero.toFixed());
    console.log("Valor almacenado " + numero.toFixed(4));
}
console.log("Referencias");
function pruebaDeArgumentos(argumento1){
    console.log("numero de parametros enviados " +arguments.length);
    console.log("numero de argumentos pasados "+ arguments.callee.length);
    for(let i = 0; i<arguments.length; i++){
        console.log("Posicion : " + i + " valor " + arguments[i]);
    }
    console.log("---------");
}

pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("Hola", 3,44, "lo que sea",new Date());

console.log("Adios mundo cruel!");
console.log("Adios mundo cruel!");
*/


console.log("Inicio de ejemplos JS con Arrays");
function testConArray(){
    let miArray = new Array();
    miArray[0]=7;
    miArray[1]="valor";
    miArray[miArray.lenght-1];
    let miOtroArray = [];
    let otro = ["uno",2, new Date()];
    //Arrays asociativos
    let arrayAsociativo = new Array();
    arrayAsociativo['uno'] = 1;
    console.log(arrayAsociativo['uno']);
    let persona = new Array();
    persona.nombre = "Manuel";
    persona.apellido1 = "González";
    persona.pruebaDeArgumentos = pruebaDeArgumentos;
    persona.pruebaDeArgumentos(); //ejecuta la funcion;
    console.log("nombre completo: " +persona.nombre + " " + persona.apellido1);
 //   Array.prototype;
}
//testConArray();
//ejemplo de creacion de una clase
function MiClase(campo1,campo2){
    this.clave1=campo1;
    this.clave2=campo2;

}
//El metodo lo añadimos por fuera con el prototipado
MiClase.prototype.miMetodo = function(){
    return this.clave1 + "-" +this.clave2;
}

var miObjeto =new MiClase("uno","dos");
console.log("El valor de la clave uno es: " + miObjeto.clave1);
console.log("Mi objeto tiene: " + miObjeto.miMetodo());

//Metodo que averigua si un elemento está contenido dentro de un array
Array.prototype.contiene = function(arg){
    for(let i = 0;i<this.length;i++){
        if(this[i]==arg){
            return true;
        }
    }
    return false;
};

var ejemploArray = [1,2,3];

console.log(ejemploArray.contiene(2));

/texto a validar/.test("si hay texto a validar entonces true");

let miInfo = {uno:1,dos:2,tres:3}; //array asociativos
miInfo.dos;
let miInfoArray = [{uno:1,dos:2,tres:3}];
miInfo[0].dos;