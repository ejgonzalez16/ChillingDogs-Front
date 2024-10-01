import { Component, Input } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent {
  @Input() modificar!: boolean;
  @Input() cliente!: Cliente;

  constructor(
    private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {
  }

  onSubmit() {
    if (this.modificar) {
      this.clienteService.update(this.cliente).pipe(
        mergeMap(() => this.router.navigate(['/clientes/buscar']))
      ).subscribe();
    } else {
      this.clienteService.add(this.cliente).pipe(
        mergeMap(() => this.router.navigate(['/clientes/buscar']))
      ).subscribe();
    }
  }
}
