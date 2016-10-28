$(document).ready(initializeEvent);
function initializeEvent(){
    $("#peticionAjax").click(peticionAjaxGenerica/*,pruebasConGetyPost*/);

}

function peticionAjaxGenerica(){
    //llamamos al metodo de ajax de jquery y le pasamos datos clave valor
    $.ajax({
        //Puede ser una cadena, un array, un objeto
        // ?nombre=Manuel&lugar=Madrid
        data: {nombre:"Manuel",lugar:"Madrid"},
        //Tipo de peticion http
        type:"GET",
        //tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionCompletada(data,status,jqXHR){
    alert("Peticion completada con status " + status + " : " + data);
    $("#contenidoDeAjax").html("Calle: " + data[0].address.street);
}

function peticionFallida(jqXHR,status,error){//el jqXHR es el objeto ajax que lo devuelve
    console.log("Error al procesar la peticion");
    console.log("Status " + status);
    console.log("Error " + error );
}

function pruebasConGetyPost(){
    $.get("http://localhost:8080/ejemplo17FicheroAlojadoEnServidor.txt",resultadoGet);
    $.post(("http://localhost:8080/ejemplo17FicheroAlojadoEnServidor.txt"),resultadoPost);
}

function resultadoGet(data,status){
    alert("resultado: " + data);
}

function resuladoPost(){
    alert("Post correcto");
}



