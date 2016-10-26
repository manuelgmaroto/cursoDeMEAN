$(document).ready(inicializeEvents);
//TODO:cargar peliculas al iniciar
function inicializeEvents(){
    $("#botonGuardar").click(addMovie);
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
    $("tr").click(classRemove);
    peticionAjaxGenerica();
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

function cargarPeliculas(){
    $.get("http://localhost:8080/data/peliculas.json",resultadoGet);
}

function peticionAjaxGenerica(){
    //llamamos al metodo de ajax de jquery y le pasamos datos clave valor
    $.ajax({
        //Puede ser una cadena, un array, un objeto
        // ?nombre=Manuel&lugar=Madrid
        data: "data",
        //Tipo de peticion http
        type:"GET",
        //tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "https://localhost:8080/data/peliculas.json"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

//Acabar peticion ajax