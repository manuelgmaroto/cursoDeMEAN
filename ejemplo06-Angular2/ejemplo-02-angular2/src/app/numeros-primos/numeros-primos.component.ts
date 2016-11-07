import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos',
  templateUrl: './numeros-primos.component.html',
  styleUrls: ['./numeros-primos.component.css']
})
export class NumerosPrimosComponent implements OnInit {

  listaDeNumeros: number[];
  constructor() { 
    this.listaDeNumeros = [1,2,4,5,7,9,11,17,18,25,44,73]
  }

  esPrimo(numero: number): boolean{
    if(numero===2){
      return true;
    }
    if(numero<3 || numero%2 ===0 || numero !== Math.floor(numero)){
      return false;
    }
    let maximo = Math.floor(Math.sqrt(numero));
    for (let i = 0; i <= maximo; i+=2){
      if (numero%i === 0){
        return false;
      }
    }
    return true;
  }

  ngOnInit() {
  }

}
