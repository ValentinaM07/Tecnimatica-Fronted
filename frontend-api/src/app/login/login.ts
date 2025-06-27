// src/app/login/login.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  emailUs: string = '';
  contrasenaUs: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  iniciarSesion(): void {
    const login = {
      email: this.emailUs,
      contrasena: this.contrasenaUs
    };

    this.usuarioService.login(login).subscribe({
      next: (res) => {
        if (res === true) {
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/home']); // Cambia esta ruta según tu aplicación
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error: (err) => {
        alert('Error al iniciar sesión');
        console.error(err);
      }
    });
  }
}
