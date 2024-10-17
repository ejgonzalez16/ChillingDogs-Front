import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../modelo/veterinario";
import { Droga } from '../modelo/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8099/drogas');
  }
}
