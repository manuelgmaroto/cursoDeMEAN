


function Calculadora(){
    
    }

Calculadora.prototype.calcular = function(arg){
    return eval(arg);
}

Calculadora.prototype.sumar = function(arg1){
    this.resultado = 0;
    for(let i = 0; i < arguments.length; i++){
        this.resultado += arguments[i];
    }
    return this.resultado;

}

//TODO:funcion que verifique que lo que entra es un number


var calculadora2 = new Calculadora();

console.log(calculadora2.sumar(10,20));
console.log(calculadora2.sumar(10));

//Clase calculadora que le pases los valores e hiciera las operaciones
//un valor lo acumula
//operar(operador,valor) cada vez manda el resultado
//delete memoria

//nacesito clase intermecia que unieera la calculadora con la vista
/*
var calculadora1 = new Calculadora();


console.log(calculadora1.suma(10));
console.log(calculadora1.suma(10));
console.log(calculadora1.suma(10));
console.log(calculadora1.borrado());
console.log(calculadora1.suma(10));
console.log(calculadora1.resta(5));
console.log(calculadora1.borrado());
console.log(calculadora1.multiplicacion(10));
console.log(calculadora1.multiplicacion(10));
console.log(calculadora1.division(2));
*/
