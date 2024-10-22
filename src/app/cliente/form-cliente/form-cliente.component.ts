import { Component, Input } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent {
  @Input() modificar!: boolean;
  @Input() cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
    });
  }

  onSubmit() {
    if (this.modificar) {
      // Actualiza el cliente y vuelve a recargar la página con la información actualizada
      this.clienteService.update(this.cliente).pipe(
        mergeMap(() => this.router.navigate(['/clientes/buscar']))
      ).subscribe();
    } else {
      // Crea el cliente y vuelve a recargar la página con la información actualizada
      this.clienteService.add(this.cliente).pipe(
        mergeMap(() => this.router.navigate(['/clientes/buscar']))
      ).subscribe();
    }
  }
}
