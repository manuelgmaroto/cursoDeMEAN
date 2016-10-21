addEvent(window,'load',inicializarEventos,false);

function addEvent(elemento,nomEvento,funcion,captura){
    if(elemento.attachEvent){
        //si el elemento no tiene el evento se le añade por versiones
        elemento.attachEvent('on'+nomEvento,funcion);
        return true;
    }else{
        if(elemento.addEventListener){
            elemento.addEventListener(nomEvento,funcion,captura);
            return true
        }
        return false;
    }
}

function inicializarEventos(){
    let botonjs1 = document.getElementById("botonjs1");
    addEvent(botonjs1,'click',botonConJavascript,false);
}

function botonConJavascript(e){
    alert("Boton js pulsado");
}