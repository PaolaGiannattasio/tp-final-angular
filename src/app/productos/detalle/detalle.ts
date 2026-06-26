import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productosService.obtenerPorId(id);
  }
}