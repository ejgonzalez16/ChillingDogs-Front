import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Administrador} from "../modelo/administrador";
import {Perfil} from "../modelo/perfil";
import {Usuario} from "../modelo/usuario";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // baseUrl = 'http://localhost:8099/admin';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/admin';

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<String> {
    return this.http.post(this.baseUrl+"/login", usuario, {responseType: 'text'}); // El back devuelve un token (string)
  }

  getPerfil(): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.baseUrl}/perfil`);
  }
}
