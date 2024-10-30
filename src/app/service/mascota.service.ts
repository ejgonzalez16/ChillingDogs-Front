import { Injectable } from '@angular/core';
import {Mascota} from "../modelo/mascota";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  // baseUrl = 'http://localhost:8099/mascotas';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/mascotas';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.baseUrl);
  }

  findById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.baseUrl}/`+id);
  }

  findByClienteCedula(cedula: string): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.baseUrl}/cliente/`+cedula);
  }

  add(mascota: Mascota): Observable<any> {
    return this.http.post(this.baseUrl, mascota);
  }

  update(mascota: Mascota): Observable<any> {
    return this.http.put(this.baseUrl, mascota);
  }

  deleteById(id: number){
    this.http.delete(`${this.baseUrl}/`+id).subscribe();
  }
}
