import { Component, OnInit } from '@angular/core';
//imoprtmos la clase libro
import { Libro} from '../modelo/Libro';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private libro: Libro;

  constructor() { 
    this.libro = new Libro("","");
  }
  enviarFormulario(formulario: any){
    console.log("Datos del formulario enviado" + formulario);
    console.log("Libro: " + this.libro);
    //this.libro.titulo = "Otro valor";
  }
  ngOnInit() {
  }

}
