import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './landing/main/main.component';
import { CarruselComponent } from './transversales/carrusel/carrusel.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { TablaMascotaComponent } from './mascota/tabla-mascota/tabla-mascota.component';
import { SearchBarClienteComponent } from './cliente/search-bar-cliente/search-bar-cliente.component';
import { DetallesClienteComponent } from './cliente/detalles-cliente/detalles-cliente.component';
import { FormsModule } from '@angular/forms';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { SearchBarMascotaComponent } from './mascota/search-bar-mascota/search-bar-mascota.component';
import { DetallesMascotaComponent } from './mascota/detalles-mascota/detalles-mascota.component';
import { FormMascotaComponent } from './mascota/form-mascota/form-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { RouterModule } from '@angular/router';
import { MisMascotasComponent } from './mascota/mis-mascotas/mis-mascotas.component';
import { LoginComponent } from './login/main/login.component';
import { MascotaComponent } from './transversales/detalles/mascota/mascota.component';
import { ClienteComponent } from './transversales/detalles/cliente/cliente.component';
import { DetallesParaClienteComponent } from './mascota/detalles-para-cliente/detalles-para-cliente.component';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { ErrorComponent } from './transversales/error/error.component';
import { MainAdminComponent } from './administrador/main/main-admin.component';
import { CRUDsComponent} from './administrador/cruds/cruds.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';

// PrimeNG Modules
import { CarouselModule } from 'primeng/carousel';
import { ModificarTratamientoComponent } from './tratamiento/modificar-tratamiento/modificar-tratamiento.component';
import { TablaTratamientoComponent } from './tratamiento/tabla-tratamiento/tabla-tratamiento.component';
import { FormVeterinarioComponent } from './veterinario/form-veterinario/form-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { SearchBarVeterinarioComponent } from './veterinario/search-bar-veterinario/search-bar-veterinario.component';
import { TablaVeterinarioComponent } from './veterinario/tabla-veterinario/tabla-veterinario.component';
import { DetallesVeterinarioComponent } from './veterinario/detalles-veterinario/detalles-veterinario.component';
import { ModificarVeterinarioComponent } from './veterinario/modificar-veterinario/modificar-veterinario.component';
import { SearchBarTratamientoComponent } from './tratamiento/search-bar-tratamiento/search-bar-tratamiento.component';
import { TratamientosMascotaComponent } from './tratamiento/tratamientos-mascota/tratamientos-mascota.component';
import { TratamientosVeterinarioComponent } from './tratamiento/tratamientos-veterinario/tratamientos-veterinario.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CrearTratamientoComponent } from './tratamiento/crear-tratamiento/crear-tratamiento.component';
import { FormTratamientoComponent } from './tratamiento/form-tratamiento/form-tratamiento.component';
import { ChatbotComponent } from './landing/chatbot/chatbot.component';
import {AuthInterceptor} from "./helpers/auth.interceptor";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CarruselComponent,
    TablaClienteComponent,
    TablaMascotaComponent,
    SearchBarClienteComponent,
    DetallesClienteComponent,
    FormClienteComponent,
    RegistrarClienteComponent,
    ModificarClienteComponent,
    SearchBarMascotaComponent,
    DetallesMascotaComponent,
    FormMascotaComponent,
    ModificarMascotaComponent,
    CrearMascotaComponent,
    MisMascotasComponent,
    LoginComponent,
    MascotaComponent,
    ClienteComponent,
    DetallesParaClienteComponent,
    ErrorComponent,
    CRUDsComponent,
    DashboardComponent,
    MainAdminComponent,
    ModificarTratamientoComponent,
    TablaTratamientoComponent,
    FormVeterinarioComponent,
    CrearVeterinarioComponent,
    SearchBarVeterinarioComponent,
    TablaVeterinarioComponent,
    DetallesVeterinarioComponent,
    ModificarVeterinarioComponent,
    SearchBarTratamientoComponent,
    TratamientosMascotaComponent,
    TratamientosVeterinarioComponent,
    CrearTratamientoComponent,
    FormTratamientoComponent,
    ChatbotComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        CarouselModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxChartsModule,
        NgOptimizedImage,
    ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
