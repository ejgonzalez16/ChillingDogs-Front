import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './landing/main/main.component';
import { CarruselComponent } from './transversales/carrusel/carrusel.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { TablaMascotaComponent } from './mascota/tabla-mascota/tabla-mascota.component';
import { HeaderClienteComponent } from './cliente/header-cliente/header-cliente.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CarruselComponent,
    TablaClienteComponent,
    TablaMascotaComponent,
    HeaderClienteComponent,
    SearchBarClienteComponent,
    DetallesClienteComponent,
    FormClienteComponent,
    RegistrarClienteComponent,
    ModificarClienteComponent,
    SearchBarMascotaComponent,
    DetallesMascotaComponent,
    FormMascotaComponent,
    ModificarMascotaComponent,
    CrearMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
