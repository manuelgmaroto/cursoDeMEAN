$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("#peticionAjax").click(dameFichero);
}
function dameFichero(){
    $("#contenidoAjax").load("ejemplo17FicheroAlojadoEnServidor.txt");
}