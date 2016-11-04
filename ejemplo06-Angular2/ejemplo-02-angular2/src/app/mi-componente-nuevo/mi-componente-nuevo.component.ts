import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente-nuevo',/*
  template:'<p>Holllaaa</p>',*/
  templateUrl: './mi-componente-nuevo.component.html',
  styleUrls: ['./mi-componente-nuevo.component.css']/*,
  styles:[
    `p{
        background-color:red;
    }
    body{
      font-size:2em;
      }
    `
  ]*/
})
export class MiComponenteNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Inicializado mi nuevo componente");
  }

}
