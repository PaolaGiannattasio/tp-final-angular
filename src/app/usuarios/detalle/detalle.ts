import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {

  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuario = this.usuariosService.obtenerPorId(id);
  }
}