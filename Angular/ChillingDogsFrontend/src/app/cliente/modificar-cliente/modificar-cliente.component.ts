import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ActivatedRoute } from '@angular/router';
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.scss'
})
export class ModificarClienteComponent {
  id!: number;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.cliente = this.clienteService.findById(this.id);
  }
}
