import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Teoria-Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
