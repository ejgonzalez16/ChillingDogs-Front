import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { MainComponent } from './landing/main/main.component';
import { DetallesClienteComponent } from './cliente/detalles-cliente/detalles-cliente.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { TablaMascotaComponent } from './mascota/tabla-mascota/tabla-mascota.component';
import { DetallesMascotaComponent } from './mascota/detalles-mascota/detalles-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { LoginComponent } from './login/main/login.component';
import { MisMascotasComponent } from './mascota/mis-mascotas/mis-mascotas.component';
import { DetallesParaClienteComponent } from './mascota/detalles-para-cliente/detalles-para-cliente.component';
import { ErrorComponent } from './transversales/error/error.component';

const routes: Routes = [
  { path: 'clientes/buscar', component:  TablaClienteComponent},
  { path: 'clientes/buscar/:id', component: DetallesClienteComponent},
  { path: 'clientes/registrar', component: RegistrarClienteComponent},
  { path: 'clientes/modificar/:id', component: ModificarClienteComponent},
  { path: 'mascotas/buscar', component: TablaMascotaComponent},
  { path: 'mascotas/buscar/:id', component: DetallesMascotaComponent},
  { path: 'mascotas/registrar', component: CrearMascotaComponent},
  { path: 'mascotas/modificar/:id', component: ModificarMascotaComponent},
  { path: 'mascotas/detalles/:id', component: DetallesParaClienteComponent},
  { path: 'mis-mascotas/:id', component: MisMascotasComponent},
  { path: 'landing', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
