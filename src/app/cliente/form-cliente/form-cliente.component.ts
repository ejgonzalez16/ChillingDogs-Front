import { Component, Input } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent {
  @Input() modificar!: boolean;
  @Input() cliente!: Cliente;
  loginError: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private perfilService: PerfilService) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
  }

  onSubmit() {
    // Validar el correo
    if (this.cliente.correo === '' || this.cliente.correo.indexOf('@') === -1) {
      this.loginError = 'Email inválido';
      return;
    }
    if (this.modificar) {
      // Actualiza el cliente y vuelve a recargar la página con la información actualizada
      this.clienteService.update(this.cliente).pipe(
        mergeMap(() => this.router.navigate(['/clientes/buscar']))
      ).subscribe();
    } else {
      // Crea el cliente y vuelve a recargar la página con la información actualizada
      this.clienteService.add(this.cliente).subscribe(
        () => this.router.navigate(['/clientes/buscar'])
      );
    }
  }

  goBack() {
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
