import { Injectable } from '@angular/core';
import { Email } from '../modelo/email';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //baseUrl = 'http://localhost:8099/email';
  baseUrl = 'https://chillingdogsback.azurewebsites.net/email';

  constructor(private http: HttpClient) { }

  envarEmail(email: Email): Observable<string> {
    return this.http.post<string>(this.baseUrl, email);
  }

}
