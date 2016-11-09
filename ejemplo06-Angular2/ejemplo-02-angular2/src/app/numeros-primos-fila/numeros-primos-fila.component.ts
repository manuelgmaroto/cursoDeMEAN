import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  inputs:['numero'],
  //defino los outputs
  outputs:['eventoMostrar']

})
export class NumerosPrimosFilaComponent implements OnInit {

  private numero: number = 0;
  //event emiter para propagar el evento
  private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();//puedo indicar lo que envío
  private mostrarContenido = false;
  constructor() { }

  ngOnInit() {
  }
  //disparo el evento
  enviarNotificacion():void{
    this.mostrarContenido = !this.mostrarContenido;
    console.log("Evento enviado");
    this.eventoMostrar.emit(this.mostrarContenido);
    
  }
}
