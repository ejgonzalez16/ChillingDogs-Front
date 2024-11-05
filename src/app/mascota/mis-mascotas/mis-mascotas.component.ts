import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';
import { Cliente } from '../../modelo/cliente';
import {ClienteService} from "../../service/cliente.service";
import {catchError, map, mergeMap, of, Subject, switchMap, takeUntil} from "rxjs";
import {TratamientoService} from "../../service/tratamiento.service";
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrl: './mis-mascotas.component.scss'
})
export class MisMascotasComponent {

  private destroy$ = new Subject<void>();  // Notifica cuándo se destruye el componente
  cedula!: string;
  cliente!: Cliente;
  mascotas!: Mascota[];
  rolUsuario: string = 'clientePending';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    private tratamientoService: TratamientoService,
    private perfilService: PerfilService
  ) {}

  ngOnInit(){
    // Hacer lo que está abajo, pero con un solo subscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        console.log('perfil', perfil);
        if (perfil.rol == 'ADMIN' || perfil.rol == 'GUEST') {
          this.redirectNotAuthorized();
          return of([]);
        } else if (perfil.rol == 'VETERINARIO') {
          this.rolUsuario = 'VETERINARIO';
          console.log('VETERINARIO explotando la DB');
          return this.tratamientoService.findAllByVeterinarioLogueado().pipe(
            map(tratamientos =>
              tratamientos.map(tratamiento => ({
              id: tratamiento.mascota.id,
              nombre: tratamiento.mascota.nombre,
              raza: tratamiento.fecha.toString(),  // Usar la fecha en lugar de la raza
              enfermedad: tratamiento.droga.nombre,  // Usar el nombre de la droga en lugar de enfermedad
              foto: tratamiento.mascota.foto,
              estado: tratamiento.mascota.estado
            })))
          );
        } else {
          this.rolUsuario = 'CLIENTE';
          return this.mascotaService.findByCliente();
        }
      })
    ).subscribe(mascotas => {
      this.mascotas = mascotas;
    });
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
