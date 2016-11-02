


function Calculadora(){
        this.memoria = 0;
    }

Calculadora.prototype.calcular = function(arg){
    return eval(arg);
}

Calculadora.prototype.operacion = function(num,operacion){
    
    num = parseInt(num);

    if(this.memoria==0){
        this.memoria = num;
    }else if(operacion=="+"){
        this.memoria += num;
    }else if(operacion == "-"){
        this.memoria -= num;
    }
   
    return this.memoria;

   /*
    switch(operacion){
    case "+":
        this.memoria+=num;
        break;
    case "-":
        this.memoria-=num;
        break;
    default:
        this.memoria=num;
    }
    
    return this.memoria;
    */
}

Calculadora.prototype.borrarMemoria = function(){
    this.memoria = 0;
}

//TODO no borra bien








