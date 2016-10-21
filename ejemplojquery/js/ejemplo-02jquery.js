$(document).ready(inicializarEventos);

function inicializarEventos(){
    $("#titulo1").click(presionTitulo1);
    $("#titulo2").click(presionTitulo2);
}

function presionTitulo1(){
    let miTitulo = $('#titulo1');
    miTitulo.css("color","#f00");
    miTitulo.css("background-color","#ff0");
    miTitulo.css("font-family","Courier"); 
}

function presionTitulo2(){
    let miTitulo = $('#titulo2');
    miTitulo.css("color","#00f");
    miTitulo.css("background-color","#0ff");
    miTitulo.css("font-family","Arial"); 
}

