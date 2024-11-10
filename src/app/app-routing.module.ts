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
import { CrearTratamientoComponent } from './tratamiento/crear-tratamiento/crear-tratamiento.component';
import { TratamientosMascotaComponent } from './tratamiento/tratamientos-mascota/tratamientos-mascota.component';
import { TratamientosVeterinarioComponent } from './tratamiento/tratamientos-veterinario/tratamientos-veterinario.component';
import { TablaDrogaComponent } from './drogas/tabla-droga/tabla-droga.component';
import { CrearDrogaComponent } from './drogas/crear-droga/crear-droga.component';
import { ModificarDrogaComponent } from './drogas/modificar-droga/modificar-droga.component';

const routes: Routes = [
  // CRUD Clientes (tiene acceso veterinario y admin)
  { path: 'clientes/buscar', component:  TablaClienteComponent },
  { path: 'clientes/buscar/:cedula', component: DetallesClienteComponent },
  { path: 'clientes/registrar', component: RegistrarClienteComponent },
  { path: 'clientes/modificar/:cedula', component: ModificarClienteComponent },

  // CRUD Mascotas (tiene acceso veterinario y admin)
  { path: 'mascotas/buscar', component: TablaMascotaComponent },
  { path: 'mascotas/buscar/:id', component: DetallesMascotaComponent },
  { path: 'mascotas/registrar', component: CrearMascotaComponent },
  { path: 'mascotas/modificar/:id', component: ModificarMascotaComponent },

  // Detalles de mascotas para clientes (tiene acceso todos los roles)
  { path: 'mascotas/detalles/:id', component: DetallesParaClienteComponent},
  // Mis mascotas (tienen acceso todos los roles)
  // Sin embargo, dentro hay que hacer verificación especial pq el componente se reutiliza para cliente y para veterinario
  { path: 'mis-mascotas', component: MisMascotasComponent},

  // CRD Tratamientos (tiene acceso veterinario)
  { path: 'tratamientos/buscar', component: TablaTratamientoComponent },
  { path: 'tratamientos/buscar/:id', component: TratamientosMascotaComponent },
  { path: 'tratamientos/registrar/:idMascota', component: CrearTratamientoComponent },
  // Esta se eliminaría o se cambiaría por mis-mascotas para veterinario
  { path: 'tratamientos/mis-tratamientos', component: TratamientosVeterinarioComponent },

  // Dashboard administrador
  { path: 'administrador', component: MainAdminComponent },

  // Veterinarios
  { path: 'veterinarios/buscar', component: TablaVeterinarioComponent },
  { path: 'veterinarios/buscar/:id', component: DetallesVeterinarioComponent },
  { path: 'veterinarios/registrar', component: CrearVeterinarioComponent },
  { path: 'veterinarios/modificar/:id', component: ModificarVeterinarioComponent },

  //Drogas
  { path: 'drogas/crear', component: CrearDrogaComponent },
  { path: 'drogas/buscar', component: TablaDrogaComponent },
  { path: 'drogas/modificar/:id', component: ModificarDrogaComponent },

  // Landing
  { path: 'landing', component: MainComponent},
  // Login
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
