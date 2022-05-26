import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatillas';

  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: String;
  public mi_marca: String;

  constructor(){
    this.mi_marca = "fila"
    this.color ='yellow'
    this.marcas = new Array;
    this.zapatillas = [
      new Zapatilla('Nike Fly','Nike','blanco',80,true),
      new Zapatilla('Nike excavator','Nike','brown',180,false),
      new Zapatilla('Rebook Rewind','Rebook','blanco',100,true)

    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);
    this.getMarcas()

  }

  getMarcas(){
    this.zapatillas.forEach((zapatillas,index)=>{
      if(this.marcas.indexOf(zapatillas.marca)<0){
        this.marcas.push(zapatillas.marca);

      }
      console.log(index);
    });
    console.log(this.marcas);
  }
  getMarca(){
    alert(this.mi_marca);
  }
  addMarca(){
    this.marcas.push(this.mi_marca);
  }
  borrarMarca(index: number){
    //delete this.marcas[index];
    this.marcas.splice(index,1);
  }
  onBlur(){
    console.log("has salido del input")
  }
  mostrarPalabra(){
    alert(this.mi_marca);
  }
}
