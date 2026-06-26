import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Detalle } from './detalle/detalle';
import { Crear } from './crear/crear';

export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: Lista
  },
  {
    path: 'crear',
    component: Crear
  },
  {
    path: ':id',
    component: Detalle
  }
];