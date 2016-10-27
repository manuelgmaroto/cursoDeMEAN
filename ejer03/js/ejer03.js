$(document).ready(inicializeEvents);
//TODO:cargar peliculas al iniciar
function inicializeEvents(){
    $("#botonGuardar").click(addMovie);
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
    $("tr").click(classRemove);
    peticionAjaxGenerica();
    $("#enviar").click(enviarDatos);
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
/*
function cargarPeliculas(){
    $.get("http://localhost:8080/data/peliculas.json",resultadoGet);
}
*/
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
        url: "http://localhost:3000/peliculas"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

//Acabar peticion ajax

function peticionCompletada(data,status,jqXHR){
    //alert("Peticion completada con status " + status + " : " + data);
    for (let i = 0; i < data.length; i++){
        $("#tablaPeliculas").append("<tr><td>"+ data[i].id +"</td><td>"+ data[i].titulo +"</td><td>"+ data[i].director +"</td><td>"+ data[i].sinopsis +"</td><td>"+ data[i].fecha +"</td></tr>");
        $("tr").click(classRemove);
    }
}

function peticionFallida(jqXHR,status,error){//el jqXHR es el objeto ajax que lo devuelve
    console.log("Error al procesar la peticion");
    console.log("Status " + status);
    console.log("Error " + error );
}

function enviarDatos(){
    $.ajax({
        data: {"titulo":"Lo que el viento se llevo","director":"Sam Smith","sinopsis":"estalla la guerra y todo arde","año":"200AC"},
        type: "POST",
        dataType : "json",
        url: "http://localhost:3000peliculas"
    }).done(envioCompleto).fail(peticionFallida);
}

function envioCompleto(){
    alert("ole");
}