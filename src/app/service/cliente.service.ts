import { Injectable } from '@angular/core';
import {Cliente} from "../modelo/cliente";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // baseUrl = 'http://localhost:8099/clientes';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/clientes';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  findByCedula(cedula: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${cedula}`);
  }

  add(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl, cliente);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
