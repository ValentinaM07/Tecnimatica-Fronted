import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioRegistro } from '../dtos/usuario-registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:5001/api/usuario'; // Cambia el puerto si tu API usa otro

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: UsuarioRegistro): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearUsuario`, usuario);
  }
}

