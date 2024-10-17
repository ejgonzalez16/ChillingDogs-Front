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
  cedula!: string;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private mascotaService: MascotaService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(params => {
        // Trae el cliente a modificar
        this.cedula = params.get('cedula')!;
        return this.clienteService.findByCedula(this.cedula);
      })
    ).subscribe(cliente => {
      this.cliente = cliente;
    });
  }
}
