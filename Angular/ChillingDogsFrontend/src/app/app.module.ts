import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './transversales/error/error.component';

// PrimeNG Modules
import { CarouselModule } from 'primeng/carousel';

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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
