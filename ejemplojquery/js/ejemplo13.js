$(document).ready(inicializaEventosConJquery);

function inicializaEventosConJquery(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox(){
    $("#descripcion").fadeOut("slow");
}

function showBox(){
    $("#descripcion").fadeIn("slow");
}



