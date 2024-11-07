import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";
import {Usuario} from "../modelo/usuario";
import {Perfil} from "../modelo/perfil";

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  //baseUrl = 'http://localhost:8099/veterinarios';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/veterinarios';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.baseUrl);
  }

  findByCedula(cedula: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.baseUrl}/${cedula}`);
  }

  login(usuario: Usuario): Observable<String> {
    console.log(usuario);
    return this.http.post(this.baseUrl+"/login", usuario, {responseType: 'text'}); // El back devuelve un token (string)
  }

  getPerfil(): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.baseUrl}/perfil`);
  }

  add(veterinario: Veterinario): Observable<Veterinario>{
    return this.http.post<Veterinario>(this.baseUrl, veterinario);
  }

  update(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(this.baseUrl, veterinario);
  }

  deleteById(id: string): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
