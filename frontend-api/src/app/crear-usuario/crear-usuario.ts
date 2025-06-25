import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { UsuarioRegistro } from '../dtos/usuario-registro';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-usuario.html'
})
export class CrearUsuarioComponent {
  usuario: UsuarioRegistro = {
    emailUs: '',
    contrasenaUs: ''
  };

  mensaje: string = '';

  constructor(private usuarioService: UsuarioService) {}

  registrar() {
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: () => {
        this.mensaje = '✅ Usuario creado correctamente.';
      },
      error: () => {
        this.mensaje = '❌ Error al crear usuario.';
      }
    });
  }
}



