import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MuestraComponent } from './muestra/muestra.component';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {EmpleadoServiceService} from './empleado-service.service';
import { FritoComponent } from './frito/frito.component';
import { CompraComponent } from './compra/compra.component';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    MuestraComponent,
    FritoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatMenuModule,
   FormsModule,
   MatListModule,
   MatSortModule,
   AngularFireModule.initializeApp(environment.fireConfg),
   AngularFireDatabaseModule
  ],
  providers: [EmpleadoServiceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
