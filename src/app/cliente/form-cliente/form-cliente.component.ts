import { Component, Input } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent {
  @Input() modificar!: boolean;
  @Input() cliente!: Cliente;
  loginError: string = '';
  isModoOscuro: boolean = true;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit() {
    // Validar el correo
    if (this.cliente.correo === '' || this.cliente.correo.indexOf('@') === -1) {
      this.loginError = 'Email inválido';
      return;
    }
    if (this.modificar) {
      // Actualiza el cliente y muestra un alert solo si la actualización es exitosa
      this.clienteService.update(this.cliente).pipe(
        mergeMap(() => {
          alert('Cliente modificado con éxito');
          return this.router.navigate(['/clientes/buscar']);
        })
      ).subscribe();
    } else {
      // Crea el cliente y muestra un alert solo si la creación es exitosa
      this.clienteService.add(this.cliente).subscribe(() => {
        alert('Cliente creado con éxito');
        this.router.navigate(['/clientes/buscar']);
      });
    }
    
  }

  validateCedulaLength(): boolean {
    const cedulaStr = String(this.cliente.cedula);
    return cedulaStr.length >= 7 && cedulaStr.length <= 10;
  }

  correoValido(): boolean {
    const correo = this.cliente.correo;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreo.test(correo);
  }

  celularValido(): boolean {
    const celularStr = String(this.cliente.celular);
    return celularStr.length === 10;
  }

  goBack() {
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
