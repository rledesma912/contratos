import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

//Componente para las Rutas de la app
  import { APP_ROUTING } from './app.routes';

//Servicios
import { ConsultaService } from './services/consulta.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ParrafosComponent } from './components/parrafos/parrafos.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { AboutComponent } from './components/about/about.component';
import { ParrafoComponent } from './components/parrafo/parrafo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParrafosComponent,
    ContratosComponent,
    AboutComponent,
    ParrafoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConsultaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
