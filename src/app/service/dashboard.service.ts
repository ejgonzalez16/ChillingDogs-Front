import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentosMes } from '../modelo/medicamentosMes';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:8099/dashboard';
  // baseUrl = 'https://chillingdogsback.azurewebsites.net/dashboard';

  constructor(private http: HttpClient) { }

  countTratamientos(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-tratamiento`);
  }

  countTratamientosMes(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-tratamiento-mes`);
  }

  medicamentosMes(): Observable<MedicamentosMes[]> {
    return this.http.get<MedicamentosMes[]>(`${this.baseUrl}/medicamentos-mes`);
  }

  countVetActivos(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-vet-activos`);
  }

  countVetInactivos(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-vet-inactivos`);
  }

  countMascotas(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-mascotas`);
  }

  countMascotasTratamiento(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count-mascotas-tratamiento`);
  }

  ventas(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/ventas`);
  }

  ganancias(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/ganancias`);
  }

  topDrogas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/top-drogas`);
  }
}
