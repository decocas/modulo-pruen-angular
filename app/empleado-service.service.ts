import { Injectable } from '@angular/core';
import {Empleado} from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

empleado:Empleado []=[
{id:"01",nombre:"mateo",clave:"123456"},
{id:"02",nombre:"marcos",clave:"123456"},
{id:"03",nombre:"lucas",clave:"123456"}
];

mostrar(){
	return this.empleado;
}
  constructor() { }

}
