import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";
import { Droga } from '../modelo/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8099/drogas');
  }

  findByCedula(cedula: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`http://localhost:8099/veterinarios/${cedula}`);
  }

  findByCedulaAndContrasena(cedula: string, contrasena: string): Observable<Veterinario> {
    return this.http.post<Veterinario>(`http://localhost:8099/veterinarios/login`, {cedula, contrasena});
  }

  add(veterinario: Veterinario): Observable<Veterinario>{
    return this.http.post<Veterinario>('http://localhost:8099/veterinarios', veterinario);
  }

  update(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`http://localhost:8099/veterinarios`, veterinario);
  }

  deleteById(id: string): Observable<string> {
    return this.http.delete(`http://localhost:8099/veterinarios/${id}`, { responseType: 'text' });
  }
}
