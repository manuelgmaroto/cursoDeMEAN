$(document).ready(initializeEvent);
function initializeEvent(){
    $("#peticionAjax").click(dameFichero);
}

function dameFichero(){
    $("#contenidoDeAjax").load("ejemplo17FicheroAlojadoEnServidor.txt");
}

