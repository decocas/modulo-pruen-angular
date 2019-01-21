import { Component, OnInit } from '@angular/core';
import {Empleado} from '../empleado';
import {EmpleadoServiceService} from '../empleado-service.service';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

mestra:string="que es la que";

msj:string=" ";

arreglo:Empleado[];
are:Empleado;

abrir(e:Empleado){
	this.are=e;
}
h:boolean=true;
m:any={};
b:boolean=false;
  constructor(private s:EmpleadoServiceService,
  			  private l:Location,
          private r:Router) { }

volver():void{
	this.l.back();
}


 

login(f:NgForm){
	  for(let i=0;i<this.arreglo.length;i++){
     	  
     	//if(f.value.id===this.m.id  && f.value.clave=== this.m.clave)
     		if(this.m.id==this.arreglo[i].id && this.m.clave==this.arreglo[i].clave)
        {
//       this.loginEmailUser(this.m.clave, this.m.id );
    this.r.navigate(['/frito']);

         this.msj="usuario exitoso";
          
     	this.b=true;
     	this.h=false;
      
     		}else{this.msj="usuario incorecto";
         this.b=true;
         }

     }

}





  ngOnInit() {
  this.arreglo=this.s.mostrar(); // aqui se usa el servicio
 
  }

}
