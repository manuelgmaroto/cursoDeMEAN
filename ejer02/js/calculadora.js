
function Calculadora(){
    this.resultado;
    this.suma = function(num){
        if(this.resultado){
            this.resultado += num;
            return this.resultado;
        }else{
            this.resultado = num;
            return this.resultado;
        }
    }

    this.resta = function(num){
        if(this.resultado){
            this.resultado -= num;
            return this.resultado;
        }else{
            this.resultado = num;
            return this.resultado;
        }
    }

    this.multiplicacion = function(num){
        if(this.resultado){
            this.resultado *= num;
            return this.resultado;
        }else{
            this.resultado = num;
            return this.resultado;
        }
    }

    this.division = function(num){
        if(this.resultado){
            this.resultado /= num;
            return this.resultado;
        }else{
            this.resultado = num;
            return this.resultado;
        }
    }

    this.borrado = function(){
        this.resultado = 0;
    }
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
