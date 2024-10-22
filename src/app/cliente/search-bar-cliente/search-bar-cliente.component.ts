import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-cliente',
  templateUrl: './search-bar-cliente.component.html',
  styleUrl: './search-bar-cliente.component.scss'
})
export class SearchBarClienteComponent {
  cedulaCliente!: number;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.cedulaCliente) {
      // Buscar cliente por cedula
      this.router.navigate(['/clientes/buscar', this.cedulaCliente]);
    }
  }
}
