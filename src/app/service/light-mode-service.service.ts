import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/main/login.component';
import { MainComponent } from '../landing/main/main.component';
import { MisMascotasComponent } from '../mascota/mis-mascotas/mis-mascotas.component';
import { DetallesMascotaComponent } from '../mascota/detalles-mascota/detalles-mascota.component';
import { DetallesParaClienteComponent } from '../mascota/detalles-para-cliente/detalles-para-cliente.component';

@Injectable({
  providedIn: 'root'
})
export class LightModeServiceService {
  private loginComponent: LoginComponent | null = null;
  private landingComponent: MainComponent | null = null;
  private misMascotasComponent: MisMascotasComponent | null = null;
  private detallesMascotaComponent: DetallesParaClienteComponent | null = null;

  constructor() { }

  registrarLoginComponent(componente: LoginComponent) {
    this.loginComponent = componente;
  }

  registrarLandingComponent(componente: MainComponent) {
    this.landingComponent = componente;
  }

  registrarMisMascotasComponent(componente: MisMascotasComponent){
    this.misMascotasComponent = componente;
  }

  registrarDetallesMascota(componente: DetallesParaClienteComponent){
    this.detallesMascotaComponent = componente;
  }

  obtenerModoIsModoOscuro(isModoOscuro: boolean): boolean{
    return isModoOscuro;
  }

  // Método para llamar la función de LoginComponent
  cambiarModoLogin(isModoOscuro: boolean) {
    if (this.loginComponent) {
      this.loginComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoLanding(isModoOscuro: boolean){
    if (this.landingComponent) {
      this.landingComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoMisMacotas(isModoOscuro: boolean){
    if (this.misMascotasComponent) {
      this.misMascotasComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoDetallesMascota(isModoOscuro: boolean){
    if (this.detallesMascotaComponent) {
      this.detallesMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }
}
