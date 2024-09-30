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

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8099/clientes/${id}`);
  }

  add(cliente: Cliente){
    this.http.post<Cliente>('http://localhost:8099/clientes', cliente).subscribe();
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`http://localhost:8099/clientes`, cliente);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`http://localhost:8099/clientes/${id}`, { responseType: 'text' });
  }
}
