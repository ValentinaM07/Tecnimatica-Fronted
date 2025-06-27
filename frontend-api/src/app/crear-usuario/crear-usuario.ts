import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioRegistro } from 'dtos/usuario-registro'; //alias de tsconfig.json
import { UsuarioService } from '../../servicios/usuario.service'; 


// Definir una interfaz para la respuesta del backend (si la tienes)
interface UsuarioRespuesta {
  id: number;
  message: string;
}

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-usuario.html',
  // styleUrls: ['./crear-usuario.css'] // Descomenta si tienes este archivo
})
export class CrearUsuarioComponent {
  usuario: UsuarioRegistro = {
    emailUs: '',
    contrasenaUs: ''
  };

  mensaje: string = '';

  // Inyección correcta del servicio
  private usuarioService = inject(UsuarioService);

  registrar() {
    // Se espera un tipo de respuesta UsuarioRespuesta
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: (response: UsuarioRespuesta) => {
        // Si la respuesta contiene el id, consideramos que el usuario se creó exitosamente
        if (response.id !== -1) {
          this.mensaje = `✅ Usuario creado correctamente. ID: ${response.id}`;
        } else {
          this.mensaje = `❌ Error: ${response.message}`;
        }
        // Limpiar el formulario
        this.usuario = { emailUs: '', contrasenaUs: '' }; 
      },
      error: () => {
        // En caso de error en la solicitud
        this.mensaje = '❌ Error al crear usuario.';
      }
    });
  }
}





