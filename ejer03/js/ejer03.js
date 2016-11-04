$(document).ready(inicializeEvents);
var accion, datosPelicula;

function inicializeEvents(){
    
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
    
    $("#botonGuardar").click(crearDatos);
    obtenerPeliculas();
    
}
//TODO que no borre la cabecera
function obtenerPeliculas(){
    accion = "GET";
    peticionAjaxGenerica();
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
        data: datosPelicula,
        //Tipo de peticion http
        type: accion,
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
        $("#tablaPeliculas").append("<tr class='fila'><td>"+ data[i].id +"</td><td>"+ data[i].titulo +"</td><td>"+ data[i].director +"</td><td>"+ data[i].sinopsis +"</td><td>"+ data[i].fecha +"</td></tr>");
        
    }
    $("tr.fila").click(classRemove);
}

function peticionFallida(jqXHR,status,error){//el jqXHR es el objeto ajax que lo devuelve
    console.log("Error al procesar la peticion");
    console.log("Status " + status);
    console.log("Error " + error );
}
/*
function enviarDatos(arg){
    

    $.ajax({
        data: arg,
        type: "POST",
        dataType : "json",
        url: "http://localhost:3000/peliculas"
    }).done(envioCompleto).fail(peticionFallida);
}

function envioCompleto(){
    alert("ole");
}
*/

//Crea el objeto de datos para enviar
function crearDatos(){
    let nuevaPelicula = $("#tituloPelicula").val();
    let nuevoDirector = $("#directorPelicula").val();
    let nuevaSinopsis = $("#sinopsisPelicula").val();
    let nuevaFecha = $("#fechaPelicula").val();
    datosPelicula = {"titulo": nuevaPelicula,"director":nuevoDirector,"sinopsis": nuevaSinopsis,"fecha":nuevaFecha};
    accion = "POST";
    peticionAjaxGenerica();
    obtenerPeliculas();
}