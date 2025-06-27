// src/servicios/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioRegistro } from '../app/dtos/usuario-registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5155/api/usuario';

  constructor(private http: HttpClient) {}

  // 🟢 Registro de usuario
  crearUsuario(usuario: UsuarioRegistro): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, usuario);
  }

  // 🔐 Login de usuario
  login(login: { email: string, contrasena: string }): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/login`, login);
  }
}









