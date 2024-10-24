import { Injectable } from '@angular/core';
import {Cliente} from "../modelo/cliente";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8099/clientes');
  }

  findByCedula(cedula: string): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8099/clientes/${cedula}`);
  }

  add(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8099/clientes', cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`http://localhost:8099/clientes`, cliente);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`http://localhost:8099/clientes/${id}`, { responseType: 'text' });
  }
}
