import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/main/login.component';

@Injectable({
  providedIn: 'root'
})
export class LightModeServiceService {
  private loginComponent: LoginComponent | null = null;

  constructor() { }

  registrarLoginComponent(componente: LoginComponent) {
    this.loginComponent = componente;
  }

  // Método para llamar la función de LoginComponent
  cambiarModoLogin(isModoOscuro: boolean) {
    if (this.loginComponent) {
      this.loginComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }
}
