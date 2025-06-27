// src/app/servicios/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioRegistro } from 'dtos/usuario-registro';  // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:5001/api/usuario'; // Asegúrate de que el puerto sea correcto

  constructor(private http: HttpClient) {}

  // Definimos que la respuesta será de tipo 'any' porque no tenemos el modelo Usuario
  crearUsuario(usuario: UsuarioRegistro): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/CrearUsuario`, usuario);
  }
}







