import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  peliculas = [
    {
      id:'01',
      titulo:'La leyenda de la ciudad sin nombre',
      director:'John Smith',
      anio:'1973'
    },
    {
      id:'02',
      titulo:'Chacal',
      director:'Mike Smith',
      anio:'1970'
    },
    {
      id:'03',
      titulo:'Batman',
      director:'Fred Smith',
      anio:'1999'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  ordenarPeliculas(){
    this.peliculas.reverse();
  }

}
