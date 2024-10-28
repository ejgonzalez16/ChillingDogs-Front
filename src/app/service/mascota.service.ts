import { Injectable } from '@angular/core';
import {Mascota} from "../modelo/mascota";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8099/mascotas');
  }

  findById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8099/mascotas/'+id);
  }

  findByClienteCedula(cedula: string): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8099/mascotas/cliente/'+cedula);
  }

  add(mascota: Mascota): Observable<any> {
    return this.http.post('http://localhost:8099/mascotas', mascota);
  }

  update(mascota: Mascota): Observable<any> {
    return this.http.put('http://localhost:8099/mascotas', mascota);
  }

  deleteById(id: number){
    this.http.delete('http://localhost:8099/mascotas/'+id).subscribe();
  }
}
