import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ActivatedRoute } from '@angular/router';
import {ClienteService} from "../../service/cliente.service";
import { merge, mergeMap } from 'rxjs';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.scss'
})
export class ModificarClienteComponent {
  id!: number;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private mascotaService: MascotaService) {}

  ngOnInit() {
    console.log('Modificando clientezzz');
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.clienteService.findById(this.id).pipe(
        mergeMap(cliente => {
          this.cliente = cliente;
          return this.mascotaService.findByClienteId(this.id);
        })
      ).subscribe(
        mascotas => {
          //this.cliente.mascotas = mascotas;
        }
      );
    })
  }
}
