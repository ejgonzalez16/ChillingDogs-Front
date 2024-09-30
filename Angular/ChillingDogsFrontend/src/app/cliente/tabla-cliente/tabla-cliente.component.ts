import { Component } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.scss'
})
export class TablaClienteComponent {
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clienteService.findAll().subscribe(clientes => {
        this.clientes = clientes;
      })
    })
  }

  eliminarCliente(id: number) {
    console.log("matando a", id);
    this.clienteService.deleteById(id).pipe(
        mergeMap(response => {
            console.log(response); // Esto debería mostrar "Cliente eliminado exitosamente"
            return this.clienteService.findAll(); // Actualiza la lista de clientes
        })
    ).subscribe(
        clientes => {
            this.clientes = clientes; // Actualiza la vista con la lista de clientes
            console.log('Lista de clientes actualizada:', this.clientes);
        }
    );
}
}
