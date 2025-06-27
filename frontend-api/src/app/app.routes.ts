import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario';
import { LoginComponent } from './login/login'; // importa el componente de login

export const routes: Routes = [
  { path: 'crear', component: CrearUsuarioComponent }, // ruta para registrarse
  { path: 'login', component: LoginComponent },        // ruta para login
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirección por defecto
  { path: '**', redirectTo: 'login' }                   // ruta por defecto si no existe
];
