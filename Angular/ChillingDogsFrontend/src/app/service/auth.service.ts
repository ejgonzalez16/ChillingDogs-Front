import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Usuario} from "../modelo/usuario";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  usuarioVacio: Usuario = {rol: 'guest', id: -1, nombre: '', cedula: '', foto: ''};

  // Suponiendo que el estado del usuario es almacenado como BehaviorSubject
  private userInfoSubject: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(this.usuarioVacio);
  public userInfo$: Observable<Usuario> = this.userInfoSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const userFromStorage = JSON.parse(localStorage.getItem('user') || 'null');
      console.log('userFromStorage', userFromStorage);
      // Si hay un usuario en el localStorage, actualizar el estado del usuario
      // Si no enviar el usuario vacío
      this.userInfoSubject.next(userFromStorage ? userFromStorage : this.usuarioVacio);
    }
  }

  actualizarUsuarioInfo(userInfo: Usuario): void {
    console.log('localStorage.setItem', userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));  // Guardar en localStorage
    this.userInfoSubject.next(userInfo);  // Actualizar el estado del usuario
  }

  logout(): void {
    console.log('localStorage.removeItem');
    localStorage.removeItem('user');
    this.userInfoSubject.next(this.usuarioVacio);  // Elimina la sesión
  }

  // Devuelve si el usuario está autenticado o no
  isAuthenticated(): boolean {
    return !!this.userInfoSubject.value;
  }

  // Devuelve el rol del usuario (veterinario, cliente, admin)
  getUsuarioRole(): string {
    return this.userInfoSubject.value?.rol || 'guest';
  }

  getUsuarioId(): number {
    return this.userInfoSubject.value?.id || -1;
  }

  getUsuarioCedula(): string {
    return this.userInfoSubject.value?.cedula || '';
  }
}
