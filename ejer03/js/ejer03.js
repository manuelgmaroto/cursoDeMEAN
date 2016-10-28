$(document).ready(inicializeEvents);
//TODO:cargar peliculas al iniciar
function inicializeEvents(){
    
    $("#botonModificar").click(modifyMovie);
    $("#botonBorrar").click(removeMovie);
    $("tr").click(classRemove);
    peticionAjaxGenerica();
    $("#botonGuardar").click(crearDatos);
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

function crearDatos(){
    let nuevaPelicula = $("#tituloPelicula").val();
    let nuevoDirector = $("#directorPelicula").val();
    let nuevaSinopsis = $("#sinopsisPelicula").val();
    let nuevaFecha = $("#fechaPelicula").val();
    let mensaje = {"titulo": nuevaPelicula,"director":nuevoDirector,"sinopsis": nuevaSinopsis,"fecha":nuevaFecha};
    enviarDatos(mensaje);
}