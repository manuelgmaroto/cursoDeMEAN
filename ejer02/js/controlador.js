window.addEventListener('load',iniciar);
//inicializo las variables para crear la calculadora, para la operacion, el display y el resultado
var calculadora1, numero, display,operador;

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
    for(let i = 0;i < teclasCalcular.length; i++){
        teclasCalcular[i].addEventListener('click',calcular);
    }
    
    teclaBorrar.addEventListener('click',borrar);
    teclaIgual.addEventListener('click',darResultado);
    
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
    numero = 0;
    operador = this.value;

}
//Funcion que toma los ultimos valores dados de numero y operacion para calcular el resultado al pulsar el igual
function darResultado(){
    var valorEnviar = display.value;
    display.value = calculadora1.operacion(valorEnviar,operador);
}

function borrar(){
    display.value = 0;
    numero =0;
    calculadora1.borrarMemoria();
}



    


