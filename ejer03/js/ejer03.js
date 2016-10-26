$(document).ready(inicializeEvents);

function inicializeEvents(){
    $("#botonGuardar").click(addMovie);
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
}

function addMovie(){
    $("#tablaPeliculas").append("<tr><td>Uno</td><td>Dos</td><td>TRes</td><td>Cuatro</td><td>Cinco</td></tr>").fadeIn("slow");
}

function modifyMovie(){

}

function removeMovie(){
    let position = $("tr").length-1;
    $("tr").eq(position).remove();
}