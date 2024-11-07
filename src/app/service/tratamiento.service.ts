import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";
import { Droga } from '../modelo/droga';
import { Tratamiento } from '../modelo/tratamiento';
import { TratamientoDTO } from '../modelo/tratamientoDTO';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  //baseUrl = 'http://localhost:8099/tratamientos';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/tratamientos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.baseUrl);
  }

  findAllByVeterinarioId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.baseUrl}/veterinario/${id}`);
  }

  findAllMascota(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.baseUrl}/mascota/${id}`);
  }

  add(tratamientoDTO: TratamientoDTO): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(this.baseUrl, tratamientoDTO);
  }

  update(tratamiento: TratamientoDTO): Observable<Tratamiento> {
    return this.http.put<Tratamiento>(this.baseUrl, tratamiento);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  findAllByVeterinarioLogueado(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.baseUrl}/veterinario`);
  }
}
