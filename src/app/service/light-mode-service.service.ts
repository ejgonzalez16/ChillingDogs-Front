import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/main/login.component';
import { MainComponent } from '../landing/main/main.component';
import { MisMascotasComponent } from '../mascota/mis-mascotas/mis-mascotas.component';
import { DetallesMascotaComponent } from '../mascota/detalles-mascota/detalles-mascota.component';
import { DetallesParaClienteComponent } from '../mascota/detalles-para-cliente/detalles-para-cliente.component';
import { TablaMascotaComponent } from '../mascota/tabla-mascota/tabla-mascota.component';
import { TablaClienteComponent } from '../cliente/tabla-cliente/tabla-cliente.component';
import { TablaTratamientoComponent } from '../tratamiento/tabla-tratamiento/tabla-tratamiento.component';
import { CrearMascotaComponent } from '../mascota/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from '../mascota/modificar-mascota/modificar-mascota.component';
import { RegistrarClienteComponent } from '../cliente/registrar-cliente/registrar-cliente.component';
import { ModificarClienteComponent } from '../cliente/modificar-cliente/modificar-cliente.component';
import { DetallesClienteComponent } from '../cliente/detalles-cliente/detalles-cliente.component';
import { TablaVeterinarioComponent } from '../veterinario/tabla-veterinario/tabla-veterinario.component';
import { CrearVeterinarioComponent } from '../veterinario/crear-veterinario/crear-veterinario.component';
import { ModificarVeterinarioComponent } from '../veterinario/modificar-veterinario/modificar-veterinario.component';
import { DetallesVeterinarioComponent } from '../veterinario/detalles-veterinario/detalles-veterinario.component';
import { CrearTratamientoComponent } from '../tratamiento/crear-tratamiento/crear-tratamiento.component';
import { CrearDrogaComponent } from '../drogas/crear-droga/crear-droga.component';
import { TratamientosMascotaComponent } from '../tratamiento/tratamientos-mascota/tratamientos-mascota.component';
import { MainAdminComponent } from '../administrador/main/main-admin.component';
import { ModificarDrogaComponent } from '../drogas/modificar-droga/modificar-droga.component';
import { TablaDrogaComponent } from '../drogas/tabla-droga/tabla-droga.component';

@Injectable({
  providedIn: 'root'
})
export class LightModeServiceService {
  private loginComponent: LoginComponent | null = null;
  private landingComponent: MainComponent | null = null;
  private misMascotasComponent: MisMascotasComponent | null = null;
  private detallesParaClienteMascotaComponent: DetallesParaClienteComponent | null = null;
  private tablaMascotaComponent: TablaMascotaComponent | null = null;
  private tablaClientesComponent: TablaClienteComponent | null = null;
  private tablaTratamientoComponent: TablaTratamientoComponent | null = null;
  private crearMascotaComponent: CrearMascotaComponent | null = null;
  private modificarMascotaComponent: ModificarMascotaComponent | null = null;
  private detallesMascotaComponent: DetallesMascotaComponent | null = null;
  private registrarClienteComponent: RegistrarClienteComponent | null = null;
  private modificarClienteComponent: ModificarClienteComponent | null = null;
  private detallesClienteComponent: DetallesClienteComponent | null = null;
  private tablaVeterinariosComponent: TablaVeterinarioComponent | null = null;
  private crearVeterinarioComponent: CrearVeterinarioComponent | null = null;
  private modificarVeterinarioComponent: ModificarVeterinarioComponent | null = null;
  private detallesVeterinarioComponent: DetallesVeterinarioComponent | null = null;
  private crearTramientosComponent: CrearTratamientoComponent | null = null;
  private crearDrogaComponent: CrearDrogaComponent | null = null;
  private tratamientosMascotaComponent: TratamientosMascotaComponent | null = null;
  private mainAdmin: MainAdminComponent | null = null;
  private modifcarDrogaComponent: ModificarDrogaComponent | null = null;
  private tablaDrogaComponent: TablaDrogaComponent | null = null;
  
  isModoOscuro: boolean = true;

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

  registrarDetallesParaClienteMascota(componente: DetallesParaClienteComponent){
    this.detallesParaClienteMascotaComponent = componente;
  }

  registrarTablaMascota(component: TablaMascotaComponent){
    this.tablaMascotaComponent =  component
  }

  registrarTablaCliente(component: TablaClienteComponent){
    this.tablaClientesComponent =  component;
  }

  registrarTablaTratamiento(component: TablaTratamientoComponent){
    this.tablaTratamientoComponent =  component;
  }

  registrarCrearMascota(component: CrearMascotaComponent){
    this.crearMascotaComponent =  component;
  }

  registrarModificarMascota(component: ModificarMascotaComponent){
    this.modificarMascotaComponent =  component;
  }

  registrarDetallesMascota(component: DetallesMascotaComponent){
    this.detallesMascotaComponent =  component;
  }

  registrarRegistrarClienteComponent(component: RegistrarClienteComponent){
    this.registrarClienteComponent =  component;
  }

  registrarModificarClienteComponent(component: ModificarClienteComponent){
    this.modificarClienteComponent =  component;
  }

  registrarDetallesClienteComponent(component: DetallesClienteComponent){
    this.detallesClienteComponent =  component;
  }

  registrarTablaVeterinariosComponent(component: TablaVeterinarioComponent){
    this.tablaVeterinariosComponent =  component;
  }

  registrarVeterinarioComponent(component: CrearVeterinarioComponent){
    this.crearVeterinarioComponent =  component;
  }

  registrarModificarVeterinarioComponent(component: ModificarVeterinarioComponent){
    this.modificarVeterinarioComponent =  component;
  }

  registrarDetallesVeterinario(component: DetallesVeterinarioComponent){
    this.detallesVeterinarioComponent =  component;
  }

  registrarCrearTratamientosComponent(component: CrearTratamientoComponent){
    this.crearTramientosComponent =  component;
  }

  registrarCrearDroga(component: CrearDrogaComponent) {
    this.crearDrogaComponent = component;
  }

  registrarTratamientosMascota(component: TratamientosMascotaComponent){
    this.tratamientosMascotaComponent =  component;
  }

  registrarMainAdmin(component: MainAdminComponent){
    this.mainAdmin =  component;
  }

  registrarModificarDroga(component: ModificarDrogaComponent){
    this.modifcarDrogaComponent =  component;
  }

  registrarTablaDroga(component: TablaDrogaComponent){
    this.tablaDrogaComponent =  component;
  }

  obtenerModoIsModoOscuro(isModoOscuro: boolean): boolean{
    return isModoOscuro;
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.cambiarModoLogin(isModoOscuro);
    this.cambiarModoLanding(isModoOscuro);
    this.cambiarModoMisMacotas(isModoOscuro);
    this.cambiarModoDetallesParaClienteMascota(isModoOscuro);
    this.cambiarModoTablaMascota(isModoOscuro);
    this.cambiarModoTablaClientes(isModoOscuro);
    this.cambiarModoTablaTratamiento(isModoOscuro);
    this.cambiarModoCrearMascota(isModoOscuro);
    this.cambiarModoModificarMascota(isModoOscuro);
    this.cambiarModoDetallesMascota(isModoOscuro);
    this.cambiarRegistrarCLienteComponent(isModoOscuro);
    this.cambiarModoModificarCliente(isModoOscuro);
    this.cambiarModoDetallesCliente(isModoOscuro);
    this.cambiarModoTablaVeterinarios(isModoOscuro);
    this.cambiarModoCrearVeterinario(isModoOscuro);
    this.cambiarModoDetallesVeternario(isModoOscuro);
    this.cambiarModoCrearTratamientos(isModoOscuro);
    this.cambiarModoCrearDroga(isModoOscuro);
    this.cambiarModoTratamientosMascota(isModoOscuro);
    this.cambiarModoMainAdmin(isModoOscuro);
    this.cambiarModoModificarVeterinario(isModoOscuro);3
    this.cambiarModoModificarDroga(isModoOscuro);
    this.cambiarModoTablaDroga(isModoOscuro);
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

  cambiarModoDetallesParaClienteMascota(isModoOscuro: boolean){
    if (this.detallesParaClienteMascotaComponent) {
      this.detallesParaClienteMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTablaMascota(isModoOscuro: boolean){
    if (this.tablaMascotaComponent) {
      this.tablaMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTablaClientes(isModoOscuro: boolean){
    if (this.tablaClientesComponent) {
      this.tablaClientesComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTablaTratamiento(isModoOscuro: boolean){
    if (this.tablaTratamientoComponent) {
      this.tablaTratamientoComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoCrearMascota(isModoOscuro: boolean){
    if (this.crearMascotaComponent) {
      this.crearMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoModificarMascota(isModoOscuro: boolean){
    if (this.modificarMascotaComponent) {
      this.modificarMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
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

  cambiarRegistrarCLienteComponent(isModoOscuro: boolean){
    if (this.registrarClienteComponent) {
      this.registrarClienteComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoModificarCliente(isModoOscuro: boolean){
    if (this.modificarClienteComponent) {
      this.modificarClienteComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoDetallesCliente(isModoOscuro: boolean){
    if (this.detallesClienteComponent) {
      this.detallesClienteComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTablaVeterinarios(isModoOscuro: boolean){
    if (this.tablaVeterinariosComponent) {
      this.tablaVeterinariosComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoCrearVeterinario(isModoOscuro: boolean){
    if (this.crearVeterinarioComponent) {
      this.crearVeterinarioComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoModificarVeterinario(isModoOscuro: boolean){
    if (this.modificarVeterinarioComponent) {
      this.modificarVeterinarioComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoDetallesVeternario(isModoOscuro: boolean){
    if (this.detallesVeterinarioComponent) {
      this.detallesVeterinarioComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoCrearTratamientos(isModoOscuro: boolean){
    if (this.crearTramientosComponent) {
      this.crearTramientosComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoCrearDroga(isModoOscuro: boolean){
    if (this.crearDrogaComponent) {
      this.crearDrogaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTratamientosMascota(isModoOscuro: boolean){
    if (this.tratamientosMascotaComponent) {
      this.tratamientosMascotaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent 
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoMainAdmin(isModoOscuro: boolean){
    if (this.mainAdmin) {
      this.mainAdmin.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoModificarDroga(isModoOscuro: boolean){
    if (this.modifcarDrogaComponent) {
      this.modifcarDrogaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }

  cambiarModoTablaDroga(isModoOscuro: boolean){
    if (this.tablaDrogaComponent) {
      this.tablaDrogaComponent.cambiarModo(isModoOscuro); // Llama a la función en LoginComponent
    } else {
      console.warn('LoginComponent no está registrado en el servicio.');
    }
  }
}
