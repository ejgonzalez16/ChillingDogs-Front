import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Administrador} from "../modelo/administrador";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  findByCedulaAndContrasena(cedula: string, contrasena: string): Observable<Administrador> {
    return this.http.post<Administrador>(`http://localhost:8099/admin/login`, {cedula, contrasena});
  }
}
