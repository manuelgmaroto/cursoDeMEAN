$(document).ready(inicializeEvents);

function inicializeEvents(){
    $("#botonGuardar").click(addMovie);
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
    $("tr").click(classRemove);
}

function addMovie(){
    $("#tablaPeliculas").append("<tr><td>Uno</td><td>Dos</td><td>Tres</td><td>Cuatro</td><td>Cinco</td></tr>");
    $("tr").click(classRemove);
    //TODO:que no borre la fila de th
}

function modifyMovie(){
    
}

function removeMovie(){
    //let position = $("tr").length-1;
    //$("tr").eq(position).remove();
    $(".remove").remove();
}

function classRemove(){
    $(this).addClass("remove");
    
}