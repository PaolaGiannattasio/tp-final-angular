import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-crear',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.html',
  styleUrl: './crear.css',
})
export class Crear {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required]
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.usuariosService.agregar(this.formulario.value);
      this.router.navigate(['/usuarios']);
    }
  }
}