import { Component } from '@angular/core';
import {Cliente} from "../cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.scss'
})
export class TablaClienteComponent {
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService, private router: Router) {
  }

  ngOnInit() {
    this.clientes = this.clienteService.findAll();
  }

  eliminarCliente(id: number) {
    this.clienteService.deleteById(id);
    this.clientes = this.clienteService.findAll();
  }
}
