import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';
import { Cliente } from '../../modelo/cliente';
import {ClienteService} from "../../service/cliente.service";
import {catchError, mergeMap, of} from "rxjs";

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrl: './mis-mascotas.component.scss'
})
export class MisMascotasComponent {

  cedula!: number;
  cliente!: Cliente;
  mascotas!: Mascota[];
  tipo: string = 'cliente';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService,
    private clienteService: ClienteService
  ) {}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.cedula = +params.get('cedula')!;
      this.clienteService.findByCedula(this.cedula).pipe(
        mergeMap(cliente => {
          console.log(cliente);
          this.cliente = cliente;
          return this.mascotaService.findByClienteId(this.cedula);
        }),
        catchError(error => {
          if (error.status === 404) {
            this.router.navigate(['**']);
          }
          return of([]);
        })
      ).subscribe(
        mascotas => {
          this.mascotas = mascotas;
          console.log(mascotas)
        }
      );
    })
  }
}
