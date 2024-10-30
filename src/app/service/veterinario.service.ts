import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  // baseUrl = 'http://localhost:8099/veterinarios';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/veterinarios';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.baseUrl);
  }

  findByCedula(cedula: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.baseUrl}/${cedula}`);
  }

  findByCedulaAndContrasena(cedula: string, contrasena: string): Observable<Veterinario> {
    return this.http.post<Veterinario>(`${this.baseUrl}/login`, {cedula, contrasena});
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
