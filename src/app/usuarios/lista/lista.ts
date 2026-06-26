import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {
    this.usuarios = this.usuariosService.obtenerUsuarios();
  }

  eliminar(id: number) {
    this.usuariosService.eliminar(id);
    this.usuarios = this.usuariosService.obtenerUsuarios();
  }

  cambiarEstado(id: number) {
    this.usuariosService.cambiarEstado(id);
    this.usuarios = this.usuariosService.obtenerUsuarios();
  }
}