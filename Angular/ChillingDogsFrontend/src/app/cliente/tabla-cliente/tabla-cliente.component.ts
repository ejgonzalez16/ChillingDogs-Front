import { Component } from '@angular/core';
import {Cliente} from "../cliente";
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.scss'
})
export class TablaClienteComponent {
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.clientes = this.clienteService.findAll();
  }
}
