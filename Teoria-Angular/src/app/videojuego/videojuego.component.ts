import {Component} from '@angular/core';

@Component({
  selector: 'videojuego',
  template: `
  <h2>componente de Videojuegos</h2>
  <ul>
  <li>GTA</li>
  <li>Pokemon</li>
  <li>Final Fantasy</li>
  <li>FIFA</li>
</ul>`
})
export class VideojuegoComponent {

  constructor(){
    console.log("Se ha cargado el componente: videojuego.component.ts.")
  }
}
