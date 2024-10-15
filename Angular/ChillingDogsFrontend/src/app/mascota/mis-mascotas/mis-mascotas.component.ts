import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';
import { Cliente } from '../../modelo/cliente';
import {ClienteService} from "../../service/cliente.service";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {TratamientoService} from "../../service/tratamiento.service";

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrl: './mis-mascotas.component.scss'
})
export class MisMascotasComponent {

  cedula!: number;
  cliente!: Cliente;
  mascotas!: Mascota[];
  rolUsuario: string = 'cliente';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    private tratamientoService: TratamientoService,
    private authService: AuthService
  ) {}
  ngOnInit(){
    // Hacer varios suscribe utilizando pipe y mergeMap
    this.route.paramMap.pipe(
      // Primero se obtiene el parámetro de la URL
      switchMap(params => {
        this.cedula = +params.get('cedula')!;
        return this.authService.userInfo$;
      }),
      // Luego se revisa el rol del usuario
      mergeMap(userInfo => {
        // Si es veterinario
        //   Asignamos el rol de veterinario
        //   Obtenemos los tratamientos y lo mapeamos para devolver las mascotas que ha tratado el veterinario
        if (userInfo.rol === 'veterinario') {
          this.rolUsuario = 'veterinario';
          return this.tratamientoService.findByVeterinarioId(userInfo.id).pipe(
            map(tratamientos => {
              // Transformamos los tratamientos en el formato de mascotas
              return tratamientos.map(tratamiento => ({
                id: tratamiento.mascota.id,
                nombre: tratamiento.mascota.nombre,
                raza: tratamiento.fecha.toString(),  // Colocamos la fecha en lugar de la raza
                enfermedad: tratamiento.droga.nombre,  // Colocamos el nombre de la droga en enfermedad
                foto: tratamiento.mascota.foto,
                estado: tratamiento.mascota.estado
              }));
            })
          );
        } else {
          // Si es cliente
          //   Obtenemos el cliente por su cédula
          //   Actualizamos userInfo, asignamos el rol de cliente
          //   Obtenemos las mascotas del cliente por su cédula
          return this.clienteService.findByCedula(this.cedula).pipe(
            mergeMap(cliente => {
              this.cliente = cliente;
              return this.mascotaService.findByClienteCedula(this.cedula);
            }),
            catchError(error => {
              if (error.status === 404) {
                this.router.navigate(['**']);
              }
              return of([]);  // Devolver una lista vacía en caso de error
            })
          );
        }
      })
    ).subscribe(mascotas => {
      // Asignamos las mascotas, que tiene el mismo formato tanto para veterinarios como para clientes
      this.mascotas = mascotas;
    });

    // Actualizar la información del usuario (afuera del pipe, pq si no se queda en un loop infinito de actualizaciones)
    if (this.rolUsuario === 'cliente') {
      this.authService.actualizarUserInfo('cliente', this.cliente.id, this.cliente.nombre, this.cliente.cedula, this.cliente.foto);
    }
  }
}
