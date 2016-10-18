function sumar(arg1,arg2){
    /*
    var suma = 0;
    var noNumericos = [];
    var mensaje = "Los no numericos son: ";
    for(let i = 0; i<arguments.length; i++){
        if(isNaN(arguments[i])){
            noNumericos.push(arguments[i]);
        }
    }
    if(arguments.length< arguments.callee.length){
        console.log("Se esperaban al menos dos argumentos");
        console.log("----");
    }else{
        for(let i = 0; i<arguments.length; i++){
                
                suma += arguments[i];
           }
        console.log("El resultado de la suma es: " + suma) ;
        console.log("------");
    }
    if(noNumericos.length>0){
        for(let i = 0; i<noNumericos.length; i++){
            mensaje += noNumericos[i];
        }
        console.log(noNumericos);
    }*/
    var suma = 0;
    var noNumericos = "";
    if(arguments.length<arguments.callee.length){
        console.log("No se puede hacer la suma con menos de dos numeros");
    }else{
        for(let i = 0; i<arguments.length;i++){
            if(!isNaN(arguments[i])){
                suma += arguments[i];
            }else{
                noNumericos += arguments[i];
            }
        
    }
    console.log("La suma es " + suma);
    if(noNumericos != ""){
        console.log("Los no numericos son: " + noNumericos);
    }
    }
    
}

sumar(21);
sumar(32,12);
sumar("Hola",3,2);