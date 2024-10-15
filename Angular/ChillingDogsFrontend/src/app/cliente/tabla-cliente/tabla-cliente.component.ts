import { Component } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.scss'
})
export class TablaClienteComponent {
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    // Obtener la lista de clientes
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

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }
}
