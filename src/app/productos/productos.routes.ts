import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Detalle } from './detalle/detalle';

export const PRODUCTOS_ROUTES: Routes = [
  {
    path: '',
    component: Lista
  },
  {
    path: ':id',
    component: Detalle
  }
];