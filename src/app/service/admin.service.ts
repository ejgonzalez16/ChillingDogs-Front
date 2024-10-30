import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Administrador} from "../modelo/administrador";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // baseUrl = 'http://localhost:8099/admin/login';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/admin/login';

  constructor(private http: HttpClient) { }

  findByCedulaAndContrasena(cedula: string, contrasena: string): Observable<Administrador> {
    return this.http.post<Administrador>(this.baseUrl, {cedula, contrasena});
  }
}
