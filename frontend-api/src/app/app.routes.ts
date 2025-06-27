import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario';

export const routes: Routes = [
  { path: '', component: CrearUsuarioComponent }, // página principal
  { path: '**', redirectTo: '' } // redirección por defecto
];
