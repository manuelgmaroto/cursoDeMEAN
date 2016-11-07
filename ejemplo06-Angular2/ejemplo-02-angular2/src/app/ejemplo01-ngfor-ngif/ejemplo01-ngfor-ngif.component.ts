import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {
  //Creo una variable
  mostrarInformacion: boolean;
  variableDeInstancia: string;
  tomaArray: number[] = [1,3,5,8,13,14,4,6];

  constructor() { 
    this.variableDeInstancia = "Renderizado componente ngif ngfor";
    this.mostrarInformacion =false;
  }

  ngOnInit() {
  }

  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }

  colorEnPares(numero: number):string{
    if(numero % 2 == 0){
      return "blue";
    }
    return "red";
  }


}
