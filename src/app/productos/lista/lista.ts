import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  productos: any[] = [];

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.obtenerProductos();
  }

  eliminar(id: number) {
    this.productosService.eliminar(id);
    this.productos = this.productosService.obtenerProductos();
  }
}