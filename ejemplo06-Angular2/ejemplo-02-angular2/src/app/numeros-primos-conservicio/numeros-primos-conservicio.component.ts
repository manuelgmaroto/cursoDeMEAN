import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { NumerosPrimosService } from '../numeros-primos.service';


@Component({
  selector: 'app-numeros-primos-conservicio',
  templateUrl: './numeros-primos-conservicio.component.html',
  styleUrls: ['./numeros-primos-conservicio.component.css'],
  //Añadimos el servicio con providers
  providers: [NumerosPrimosService]
})
export class NumerosPrimosConservicioComponent implements OnInit {

  listaDeNumeros: number[];
  
  mostrarInformacion: boolean = false;
  //inicializo con el servicio
  constructor(private numerosPrimosService: NumerosPrimosService) {
      this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;
   }

 

  colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "green";
      } else{
        return "blue"; 
      }
  }
  ngOnInit() {
  }
  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }

}
