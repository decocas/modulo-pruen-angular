import { Component, OnInit } from '@angular/core';
import {Frito} from '../frito';
import { Router } from '@angular/router';
@Component({
  selector: 'app-frito',
  templateUrl: './frito.component.html',
  styleUrls: ['./frito.component.css']
})
export class FritoComponent implements OnInit {

f: Frito[]=[
{id:'01',nombre:'flauta hawaina',precio:1000},
{id:'02',nombre:'flauta de pollo',precio:1200},
{id:'03',nombre:'buñuelo',precio:1000}
];
n1:number[]=[];
n:number;
frito:Frito;
model:any={};
mensaje:string;
abrir(a:Frito){
	this.frito=a;
}

t:boolean=false;
//isNaN() funcion ara evauar si un numero es numero


multiplicar(a:Frito,b:number) {
	if(!(isNaN(b))){
	this.n=(a.precio*b);
    this.t= true;
		}
	 else{
	 this.n=null;
	 this.t=false;
	 }
}
cerrar():void{
	this.mensaje="compra exitosa";
}
closeAlert():void{
	this.mensaje="";
}

agregar():void{
	if(confirm("confirmar compra") &&  !(isNaN(this.n)) ){
	this.n1.push(this.n);
	 
	}else{
this.closeAlert();
	

	}
}


  constructor(private r:Router) { }

  ngOnInit() {
  }

logout():void{
	this.r.navigate(['/muestra']);

}

}
