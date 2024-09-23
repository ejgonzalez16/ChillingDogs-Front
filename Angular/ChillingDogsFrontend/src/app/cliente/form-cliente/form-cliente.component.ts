import { Component, Input } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent {
  @Input() modificar!: boolean;
  @Input() cliente!: Cliente;

  constructor(
    private clienteService: ClienteService, private router: Router) {
  }

  onSubmit(){
    if (this.modificar) {
      this.clienteService.update(this.cliente);
      this.router.navigate(['/clientes/buscar']);
    } else {
      this.clienteService.add(this.cliente);
      this.router.navigate(['/clientes/buscar']);
    }
  }
}
