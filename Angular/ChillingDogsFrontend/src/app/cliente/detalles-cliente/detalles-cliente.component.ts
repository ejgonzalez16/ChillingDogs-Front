import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.scss'
})
export class DetallesClienteComponent {
  id!: number;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.cliente = this.clienteService.findById(this.id);
  }

  eliminarCliente(id: number) {
    this.clienteService.deleteById(id);
    this.router.navigate(['/clientes/buscar']);
  }
}
