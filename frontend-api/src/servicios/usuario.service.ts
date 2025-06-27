import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioRegistro } from '../app/dtos/usuario-registro';


import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7256/api/usuario/crear';

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: UsuarioRegistro): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }
}








