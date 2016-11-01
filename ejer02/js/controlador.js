window.addEventListener('load',iniciar);
//inicializo las variables para crear la calculadora, para la operacion, el display y el resultado
var calculadora1, numero, display,resultado;

//funcion que inicia la calculadora cuando el documento está completamente cargado, asigna un 0 en el
// display y lo escribe, inicializa las teclas para agregarles un evento 
function iniciar(){
    
    display = document.getElementById("resultado");
    display.value = 0;
    calculadora1 = new Calculadora();
    
    var teclas = document.getElementsByClassName("tecla");
    var teclasCalcular = document.getElementsByClassName("teclaCalcular");
    var teclaIgual = document.getElementById("teclaIgual");
    var teclaBorrar = document.getElementById("delete");
    
    for(let i = 0; i < teclas.length; i++){
        teclas[i].addEventListener('click',crearNumero);
    }
    
    teclaBorrar.addEventListener('click',borrar);
    teclaIgual.addEventListener('click',calcular);
    teclasCalcular.addEventListener('click',calcular);
}

function crearNumero(){
    if(numero){
        numero += this.value;
         display.value = numero;
    }else{
        numero = this.value;
        display.value = numero;
    }
}

function calcular(){
    /*
    resultado = calculadora1.calcular(operacion);
    display.value = resultado;
    operacion = resultado;
    */
    display.value = calculadora1.operacion(numero,this.value);
}

function borrar(){
    display.value = 0;
    calculadora1.operacion(0);
}

    

    


