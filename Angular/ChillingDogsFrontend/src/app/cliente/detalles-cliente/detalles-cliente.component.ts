import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';
import { merge, mergeMap } from 'rxjs';
import { Console } from 'console';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.scss'
})
export class DetallesClienteComponent {
  id!: number;
  cliente: Cliente | undefined;
  tipoLogueo: string = 'vet';

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private router: Router, private mascotaService: MascotaService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.clienteService.findByCedula(this.id).pipe(
        mergeMap(cliente => {
          this.cliente = cliente;
          return this.mascotaService.findByClienteId(this.id);
        })
      ).subscribe(
          mascotas => {
            if(this.cliente != undefined) {

              this.cliente.mascotas = mascotas;
          }
        }
      );
    })
  }

  eliminarCliente(id: number) {
    this.clienteService.deleteById(id);
    this.router.navigate(['/clientes/buscar']);
  }
}
