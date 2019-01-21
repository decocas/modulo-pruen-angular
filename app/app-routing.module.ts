import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MuestraComponent} from './muestra/muestra.component';
import {FritoComponent} from './frito/frito.component';

const routes: Routes = [{path:'muestra',component:MuestraComponent},
                        {path:'frito',component:FritoComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
