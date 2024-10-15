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
import { MainAdminComponent } from './administrador/main/main-admin.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { TablaVeterinarioComponent } from './veterinario/tabla-veterinario/tabla-veterinario.component';
import { DetallesVeterinarioComponent } from './veterinario/detalles-veterinario/detalles-veterinario.component';
import { ModificarVeterinarioComponent } from './veterinario/modificar-veterinario/modificar-veterinario.component';
import { TablaTratamientoComponent } from './tratamiento/tabla-tratamiento/tabla-tratamiento.component';

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
  { path: 'mis-mascotas/:cedula', component: MisMascotasComponent},
  { path: 'administrador/:cedula', component: MainAdminComponent},
  { path: 'landing', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'veterinarios/buscar', component: TablaVeterinarioComponent},
  { path: 'veterinarios/buscar/:id', component: DetallesVeterinarioComponent},	
  { path: 'veterinarios/registrar', component: CrearVeterinarioComponent},	
  { path: 'veterinarios/modificar/:id', component: ModificarVeterinarioComponent},
  { path: 'tratamientos/buscar', component: TablaTratamientoComponent},
  { path: '', component: MainComponent},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
