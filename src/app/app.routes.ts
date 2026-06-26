import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES)
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.routes').then(m => m.PRODUCTOS_ROUTES)
  }
];