import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario'; // ✅ ruta correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearUsuarioComponent], // ✅
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}


