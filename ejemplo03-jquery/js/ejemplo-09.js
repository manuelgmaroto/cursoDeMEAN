$(document).ready(initializeEvent);
function initializeEvent(){
    $("#buscar").focus(clearValue);
}

function clearValue(){
    $("#buscar").attr("value","");
}