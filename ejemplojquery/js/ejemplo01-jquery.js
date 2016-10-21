$(document).ready(inicializaEventosConJquery);

function botonConJquery(){
    alert("Boton jquery pulsado");
}

function inicializaEventosConJquery(){
    $("#botonjquery1").click(botonConJquery);
    $("#botonjquery2").click(botonConJquery);
}