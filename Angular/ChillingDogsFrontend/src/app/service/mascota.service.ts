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

  findByClienteCedula(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8099/mascotas/cliente/'+id);
  }

  add(mascota: Mascota){
    this.http.post('http://localhost:8099/mascotas', mascota).subscribe();
  }

  update(mascota: Mascota){
    console.log(mascota);
    this.http.put('http://localhost:8099/mascotas', mascota).subscribe();
  }

  deleteById(id: number){
    this.http.delete('http://localhost:8099/mascotas/'+id).subscribe();
  }
}
