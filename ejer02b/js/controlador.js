var numero;
var calculadora2 = new Calculadora();

function ver(arg){
    document.getElementById("display").value = arg;
}

function suma(arg){
    numero = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

function calcular(){
    document.getElementById("display").value = calculadora2.calcular(+numero,+document.getElementById("display").value);
}