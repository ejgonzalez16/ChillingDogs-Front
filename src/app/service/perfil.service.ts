import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Perfil} from "../modelo/perfil";
import {BehaviorSubject, Observable} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfilVacio: Perfil = {nombre: '', foto: '', rol: 'GUEST'};

  // Suponiendo que el estado del usuario es almacenado como BehaviorSubject
  private perfilInfoSubject: BehaviorSubject<Perfil> = new BehaviorSubject<Perfil>(this.perfilVacio);
  public perfilInfo$: Observable<Perfil> = this.perfilInfoSubject.asObservable();
  // Suponiendo que el token del usuario es almacenado como BehaviorSubject
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');  // Inicializar con un token vacío
  public token$: Observable<string> = this.tokenSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Obtener el token del localStorage
      const tokenFromStorage = localStorage.getItem('token') || '';
      console.log('tokenFromStorage', tokenFromStorage);
      // Si hay un token en el localStorage, actualizar el estado del token
      // Si no enviar el token vacío
      this.tokenSubject.next(tokenFromStorage);

      // Obtener el perfil del localStorage
      const perfilFromStorage = JSON.parse(localStorage.getItem('perfil') || 'null');
      console.log('perfilFromStorage', perfilFromStorage);
      // Si hay un usuario en el localStorage, actualizar el estado del usuario
      // Si no enviar el usuario vacío
      this.perfilInfoSubject.next(perfilFromStorage ? perfilFromStorage : this.perfilVacio);
    }
  }

  tokenAssigned(token: string): void {
    localStorage.setItem('token', token);  // Guardar en localStorage
    this.tokenSubject.next(token);  // Actualizar el estado del token
  }

  login(perfilInfo: Perfil): void {
    localStorage.setItem('perfil', JSON.stringify(perfilInfo));  // Guardar en localStorage
    this.perfilInfoSubject.next(perfilInfo);  // Actualizar el estado del usuario
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('perfil');
    this.tokenSubject.next('');  // Elimina la sesión
    this.perfilInfoSubject.next(this.perfilVacio);  // Elimina la sesión
  }
}
