import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@mail.com',
      rol: 'Administrador',
      activo: true
    },
    {
      id: 2,
      nombre: 'María López',
      email: 'maria@mail.com',
      rol: 'Editor',
      activo: false
    },
    {
      id: 3,
      nombre: 'Pedro Gómez',
      email: 'pedro@mail.com',
      rol: 'Usuario',
      activo: true
    }
  ];

  obtenerUsuarios() {
    return this.usuarios;
  }

  eliminar(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  cambiarEstado(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);

    if (usuario) {
      usuario.activo = !usuario.activo;
    }
  }

  obtenerPorId(id: number) {
    return this.usuarios.find(u => u.id === id);
  }
agregar(usuario: any) {

  const nuevoId =
    this.usuarios.length > 0
      ? Math.max(...this.usuarios.map(u => u.id)) + 1
      : 1;

  usuario.id = nuevoId;

  usuario.activo = true;

  this.usuarios.push(usuario);

}

}