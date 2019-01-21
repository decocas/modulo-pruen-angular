import { Component, OnInit } from '@angular/core';
import {CompraService} from '../compra.service';
import {Producto} from'../producto';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

 p:Producto[];


  constructor(private c:CompraService) { }

  ngOnInit() {
  this.p=this.c.mostrar();
  }
 

}
