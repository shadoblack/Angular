import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
  public zapatillas
  constructor(){
    this.zapatillas = [
      new Zapatilla('Nike Fly','Nike','blanco',80,true),
      new Zapatilla('Nike excavator','Nike','brown',180,false),
      new Zapatilla('Rebook Rewind','Rebook','blanco',100,true)

    ];
  }

  getTexto(){
    return "hola mundo desde un servicio";
  }

  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }
}
