$(document).ready(inicializaEventosConJquery);

function inicializaEventosConJquery(){
    $("#boton1").click(toggleBox);
   
}

function toggleBox(){
    $("#descripcion").toggle("slow");
}





