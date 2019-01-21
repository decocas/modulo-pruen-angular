import { Injectable } from '@angular/core';
import {Producto} from'./producto';
@Injectable({
  providedIn: 'root'
})
export class CompraService {
productos:Producto []=[
{id:"01",nombre:"masa",cantidad:1000},
{id:"02",nombre:"pollo",cantidad:1000},
{id:"03",nombre:"relleno hawaino",cantidad:1000},
{id:"04",nombre:"queso",cantidad:1000}
];

mostrar(){
	return this.productos;
}



  constructor() { }
}
