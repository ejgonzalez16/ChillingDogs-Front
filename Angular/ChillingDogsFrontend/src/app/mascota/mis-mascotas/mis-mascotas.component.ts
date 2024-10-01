import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';
import { Cliente } from '../../modelo/cliente';
import {ClienteService} from "../../service/cliente.service";
import {mergeMap} from "rxjs";

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
    private mascotaService: MascotaService,
    private clienteService: ClienteService
  ) {}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.cedula = +params.get('cedula')!;
      this.clienteService.findByCedula(this.cedula).pipe(
        mergeMap(cliente => {
          this.cliente = cliente;
          console.log(cliente)
          return this.mascotaService.findByClienteId(this.cedula);
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
