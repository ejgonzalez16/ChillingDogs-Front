import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";
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
}
