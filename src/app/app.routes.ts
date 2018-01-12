

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParrafosComponent } from './components/parrafos/parrafos.component';
import { ParrafoComponent } from './components/parrafo/parrafo.component';
import { ContratosComponent } from './components/contratos/contratos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parrafos', component: ParrafosComponent },
  { path: 'parrafo/:idParrafo', component: ParrafoComponent },
  { path: 'contratos', component: ContratosComponent },
  //esto es para las urls que no matchean con nada vayan al home
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
