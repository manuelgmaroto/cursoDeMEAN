window.addEventListener('load',iniciar);
var calculadora1, operacion, resultado;

function iniciar(){
    
    resultado = document.getElementById("resultado");
    resultado.value = 0;
    calculadora1 = new Calculadora();
    
    var teclas = document.getElementsByClassName("tecla");
    var teclaIgual = document.getElementById("teclaIgual");
    var teclaBorrar = document.getElementById("delete");
    
    for(let i = 0; i < teclas.length; i++){
        teclas[i].addEventListener('click',crearOperacion);
    }
    
    teclaBorrar.addEventListener('click',borrar);
    teclaIgual.addEventListener('click',calcular);
}

function crearOperacion(){
    if(operacion){
        operacion += this.value;
         resultado.value = operacion;
    }else{
        operacion = this.value;
        resultado.value = operacion;
    }
    
}

function calcular(){
    
    resultado.value = calculadora1.calcular(operacion);
    
}

function borrar(){
    resultado.value = 0;
    operacion = 0;
}

    

    


