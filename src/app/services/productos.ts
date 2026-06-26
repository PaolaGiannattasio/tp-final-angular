import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = [
    {
      id: 1,
      titulo: 'Notebook',
      precio: 1200000,
      descripcion: 'Notebook HP con 16GB de RAM',
      descuento: 10
    },
    {
      id: 2,
      titulo: 'Mouse',
      precio: 25000,
      descripcion: 'Mouse inalámbrico Logitech'
    },
    {
      id: 3,
      titulo: 'Teclado',
      precio: 45000,
      descripcion: 'Teclado mecánico gamer',
      descuento: 15
    }
  ];

  obtenerProductos() {
    return this.productos;
  }

  obtenerPorId(id: number) {
    return this.productos.find(p => p.id === id);
  }

  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}