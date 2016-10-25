$(document).ready(inicializaEventosConJquery);

function inicializaEventosConJquery(){
    $("#parrafos p").each(markBySize);
   
}

function markBySize(){
    //si el texto es menor de 100 le pone el css que incluye
    if($(this).text().length<100){
        $(this).css("background-color","#ff0");
    }
}





