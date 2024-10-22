import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentosMes } from '../modelo/medicamentosMes';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  countTratamientos(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-tratamiento');
  }

  countTratamientosMes(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-tratamiento-mes');
  }

  medicamentosMes(): Observable<MedicamentosMes[]> {
    return this.http.get<MedicamentosMes[]>('http://localhost:8099/dashboard/medicamentos-mes');
  }

  countVetActivos(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-vet-activos');
  }

  countVetInactivos(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-vet-inactivos');
  }

  countMascotas(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-mascotas');
  }

  countMascotasTratamiento(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/count-mascotas-tratamiento');
  }

  ventas(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/ventas');
  }

  ganancias(): Observable<number> {
    return this.http.get<number>('http://localhost:8099/dashboard/ganancias');
  }

  topDrogas(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8099/dashboard/top-drogas');
  }
}
