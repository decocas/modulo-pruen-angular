import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MuestraComponent} from './muestra/muestra.component';

const routes: Routes = [{path:'muestra',component:MuestraComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
