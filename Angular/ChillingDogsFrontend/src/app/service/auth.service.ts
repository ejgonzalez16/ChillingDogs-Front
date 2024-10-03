import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // Almacena información adicional del cliente (nombre, foto, etc.)
    private userInfoSubject = new BehaviorSubject<{ rol: string, nombre: string, cedula: string, foto: string }>({ rol: 'guest', nombre: '', cedula: '', foto: '' });
    userInfo$ = this.userInfoSubject.asObservable();

    // Cambiar la información del usuario
    actualizarUserInfo(rol: string, nombre: string, cedula: string, foto: string) {
      this.userInfoSubject.next({ rol, nombre, cedula, foto });
    }
}
