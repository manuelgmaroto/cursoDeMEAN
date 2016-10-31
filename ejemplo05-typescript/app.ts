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

var ciudadanoPepe = new Ciudadano("Pepe",null,null,"1");
console.log(ciudadanoPepe.stringify());