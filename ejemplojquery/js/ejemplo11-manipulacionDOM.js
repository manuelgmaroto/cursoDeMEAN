$(document).ready(inicializaEventosConJquery);

function inicializaEventosConJquery(){
   $("#boton1").click(deleteAll);
   $("#boton2").click(restoreAll);
   $("#boton3").click(addLastElement);
   $("#boton4").click(addFirstElement);
   $("#boton5").click(removeLastElement);
   $("#boton6").click(deleteFirstElement);
   $("#boton7").click(deleteFirstAndSecond);
   $("#boton8").click(deletePreAndLast);
}

function deleteAll(){
    $("ul").empty();
}

function restoreAll(){
    //Dentro del ul pone esto
    $("ul").html("<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>")
}

function addLastElement(){
    $("ul").append("<li>Agrego un item al final</li>");
}

function addFirstElement(){
    $("ul").prepend("<li>Agrego un item al principio</li>")
}

function removeLastElement(){
    let position = $("li").length-1;
    //eq permite obtener el li que busco
    let liToDelete = $("li").eq(position);
    liToDelete.remove();
}

function deleteFirstElement(){
    //ahora directamente le ponemos la posicion a eliminar
    $("li").eq(0).remove();
}

function deleteFirstAndSecond(){
    //lt coge los dos primeros elementos de la lista
    $("li:lt(2)").remove();
}

function deletePreAndLast(){
    let position = $("li").length-3;
    let liTodelete = $("li:gt("+ position +")");
    liTodelete.remove();
}

