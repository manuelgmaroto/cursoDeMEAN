window.addEventListener('load',iniciar);
//inicializo las variables para crear la calculadora, para la operacion, el display y el resultado
var calculadora1, operacion, display,resultado;

//funcion que inicia la calculadora cuando el documento está completamente cargado
function iniciar(){
    
    display = document.getElementById("resultado");
    display.value = 0;
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
         display.value = operacion;
    }else{
        operacion = this.value;
        display.value = operacion;
    }
}

function calcular(){

    resultado = calculadora1.calcular(operacion);
    display.value = resultado;
    operacion = resultado;
}

function borrar(){
    display.value = 0;
    operacion = 0;
}

    

    


