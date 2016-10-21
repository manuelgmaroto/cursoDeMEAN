


function Calculadora(){
    
    }

Calculadora.prototype.calcular = function(arg){
    return eval(arg);
}

Calculadora.prototype.sumar = function(arg1,arg2){
   
  this.resultado = 0;
  this.suma = function(num){
      if(this.resultado){
          this.resultado += num;
         return this.resultado;
      }else{
          this.resultado = num;
      return this.resultado;

}

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
