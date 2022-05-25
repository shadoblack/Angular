import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatillas';

  public zapatillas: Array<Zapatilla>;

  constructor(){
    this.zapatillas = [
      new Zapatilla('Nike Fly','Nike','blanco',80,true),
      new Zapatilla('Nike excavator','Nike','brown',180,false),
      new Zapatilla('Rebook Rewind','Rebook','blanco',100,true)

    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);

  }
}
