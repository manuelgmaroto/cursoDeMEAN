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


//Definiciones de clases

class Persona{ 
    //Definicon de atributos
    nombre: string;
    apellido1: string;
    apellido2: string;
    // Metodo constructor
    constructor(nombre:string,apellido1:string,apellido2:string){
        //Definicion de atributos
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    //Metodos de instancia
    stringify():string{
        return this.nombre + " " +this.apellido1 + " " + this.apellido2;
    }
}

/*Sin metodo constructor
let manuel = new Persona();
manuel.nombre ="AMnuel";
manuel.apellido1 = "Gonzalez";
manuel.apellido2 = "Maroto";*/

let manuel = new Persona("Manuel","Gonzalez","Maroto");
let federico = new Persona("Federico","Gomez","Antae");
console.log(manuel.stringify());
console.log(federico.stringify());


//Extendemos las clases con herencia

class Ciudadano extends Persona {
    
    identidad: string;

    constructor(nombre:string,apellido1:string,apellido2:string,identidad:string){
        super(nombre,apellido1,apellido2);//No copiamos el constructor con super hereda el de persona
        this.identidad = identidad; //añadimos lo que tiene 
    }
    /*Lo sobreescribimos */
    stringify():string{
        return super.stringify() + " " + this.identidad;
    }

}
//polimorfismo: es ciudadano y persona a la vez
var ciudadanoPepe = new Ciudadano("Pepe",null,null,"1");
console.log(ciudadanoPepe.stringify());

class SerVivo{
    static totalDeSeresVivos: number = 0;
    clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify(): string{//metodo de instancia, accede a la instancia. No es un metodo a nivel de clase
        return "clasificacion" + this.clasificacion;
    }
}

let pez1: SerVivo = new SerVivo("marino");
let pez2: SerVivo = new SerVivo("marino");
let pez3: SerVivo = new SerVivo("marino");
let tigre: SerVivo = new SerVivo("terrestre");
let leon: SerVivo = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);
//Tenemos que crear metodos de acceso, cada campo con un visivilidad distinta
//desde la instancia los privados no son accesibles
class Padre{
    public almacenPublico: number;
    protected almacenProtegido: number; //desde fuera no pero desde el hijo si es accesible
    private almacenPrivado: number;
}
let padre = new Padre();

class HijoDePadre extends Padre{
    constructor(){
        super();
        
    }
}

abstract class Ser{//solo se crea a través de un hijo
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify(): string{//metodo de instancia, accede a la instancia. No es un metodo a nivel de clase
        return "clasificacion" + this.clasificacion;
    }
    abstract desplazamiento(): string;//No hace falta implementarlo aqui el metodo, lo hacen los hijos
    abstract alimentarse(): string;
    //abstract ValorParaOrdenar(): string;
}
class Politico extends Ser{
    constructor(){
        super("hola");
    }
    desplazamiento(): string{
        return "En coche oficial";
    }
    alimentarse(): string{
        return "Dame dinero en sobre";
    }
}
//let ser1: Ser= new Ser(); esto no se puede

let politico: Politico = new Politico();


//funcion que puedo usar en cualquier lado
let funcionLambda = (uno: number,dos: number) =>{
    return uno + dos;
}

console.log("Resultado de sumar 1 y 3 :" + funcionLambda(1,3));

const PI = 3.141592654;
//PI = 23; //No lo permite

//Deestructuracion conjunto de varriables. Deshace el objeto y lo convierte en variables sueltas
let {variable1,variable2} = {variable1:"valor1",variable2:"valor2"};
console.log(variable1);
console.log(variable2);

/// gestion parametros con ...
function dameLosCamposporConsola(campo1: string,campo2: number,...elRestoDecampos){
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDecampos);
    console.log("for--in");
    for(let posicion in elRestoDecampos){
        console.log("El campo en la posicion: " + posicion + " es " + elRestoDecampos[posicion]);
    }
    console.log("for--of");
    for(let campo of elRestoDecampos){
        console.log("El campo es: " + campo);
    }
}

dameLosCamposporConsola("uno",2,"tres","cuatro",5,"seis");

//Para campos en los  que se usa unos campos concretos
enum TipoDeVia{
    Calle = 7, //podemos alterar el valor
    Via, 
    Rua, 
    Plaza,
    Camino, 
    Avenida, 
    Carretera
}

enum Puntos{
    TouchDown = 5,
    Goal = 3
}

var miTipoDeVia: TipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via : " + miTipoDeVia);
console.log("Tipo de via: " + TipoDeVia[miTipoDeVia]);

//creo una funcion para  comparar
namespace TipoDeVia{
    export function esAvenida(texto: string):TipoDeVia{//lo exporto para que sea funcional en todos los puntos de via
    if(texto=="Avda"){
        return TipoDeVia.Avenida;
    }
}
}

var avenida = TipoDeVia.esAvenida("Avd");


//invierte cualquier tipo de array...
//Es un generico que puede usarse pra cualquier tipo que se define cuando se va a usar
function invertir<T> (elementos: T[]): T[]{
    let invertido: T[] = [];
    for (let posicion=0, posicionInvertido = elementos.length-1;
    posicion < elementos.length;
    posicion++,posicionInvertido--){
        invertido[posicionInvertido]=elementos[posicion];
    }
    return invertido;
}

console.log(invertir<string>(["uno","dos"]));

//DAO generico que permite dar de alta y de baja lo que sea
abstract class DAOGenerico <T>{
    abstract add(objeto: T);
    abstract del(objeto: T);
    stringfy(objeto: T){
        return objeto+"";
    }
}


class PersonaDAO extends DAOGenerico<Persona>{
    private personas: Persona[];
    add(persona: Persona){
        this.personas.push(persona);
    }
    del(persona: Persona){
        //recorrer, buscar y eliminar
    }
}

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));
