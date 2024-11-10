import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Droga } from '../modelo/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  // baseUrl = 'http://localhost:8099/drogas';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/drogas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>(this.baseUrl);
  }

  findDisponibles(): Observable<Droga[]> {
    return this.http.get<Droga[]>(`${this.baseUrl}/disponibles`);
  }

  findById(id: number): Observable<Droga>{
    return this.http.get<Droga>(`${this.baseUrl}/${id}`);
  }

  add(droga: Droga): Observable<Droga> {
    console.log("Creando droga")
    return this.http.post<Droga>(this.baseUrl, droga);
  }

  update(droga: Droga): Observable<Droga> {
    return this.http.put<Droga>(this.baseUrl, droga);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
