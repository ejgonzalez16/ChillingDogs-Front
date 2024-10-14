import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // Almacena información adicional del cliente (nombre, foto, etc.)
    private userInfoSubject = new BehaviorSubject<{ rol: string, id: number, nombre: string, cedula: string, foto: string }>({ rol: 'guest', id: -1, nombre: '', cedula: '', foto: '' });
    userInfo$ = this.userInfoSubject.asObservable();

    // Cambiar la información del usuario
    actualizarUserInfo(rol: string, id: number, nombre: string, cedula: string, foto: string) {
      this.userInfoSubject.next({ rol, id, nombre, cedula, foto });
    }
}
