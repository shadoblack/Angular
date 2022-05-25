import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'

})
 export class VideojuegoComponent /*implements OnInit, DoCheck, OnDestroy*/ {
  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = "Componente de videojuegos";
    this.listado = "Listado de juegos";
    console.log("Se ha cargado el componente: videojuego.component.ts.")
  }

  // ngOnInit(): void { //se ejecuta solo nada mas arrancar la pagina
  //   console.log("OnInit ejecutado");
  // }

  // ngDoCheck(): void { //cada vez que se cambia el codigo,se carga, como al clicar,un evento,etc
  //   console.log("DoCheck ejecutado");
  // }

  // ngOnDestroy(): void { //solo se ejecuta al eliminar el componente
  //   console.log("OnDestroy ejecutado");
  // }

  cambiarTitulo(){
    this.titulo= "Nuevo titulo del componente";
  }
}
