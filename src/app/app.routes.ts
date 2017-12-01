

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParrafosComponent } from './components/parrafos/parrafos.component';
import { ContratosComponent } from './components/contratos/contratos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parrafos', component: ParrafosComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
