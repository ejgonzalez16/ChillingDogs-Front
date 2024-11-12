import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {VeterinarioService} from "../../service/veterinario.service";
import {AdminService} from "../../service/admin.service";
import {userInfo} from "node:os";
import {Usuario} from "../../modelo/usuario";
import {ClienteService} from "../../service/cliente.service";
import {catchError, of, switchMap, tap} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {PerfilService} from "../../service/perfil.service";
import { isObservable } from 'rxjs';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isModoOscuro!: boolean;

  usuario: Usuario = {
    username: '',
    password: ''
  };
  tipoLogin: string = 'CLIENTE';
  cedula: string = '';
  contrasena: string = '';
  loginError: string = '';


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private clienteService: ClienteService,
    private veterinarioService: VeterinarioService,
    private adminService: AdminService,
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private lightModeService: LightModeServiceService) { }

  ngOnInit(): void {
    // Si el usuario ya está autenticado, redirigir según su rol
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol === 'CLIENTE') {
        this.router.navigate(['/mis-mascotas']);
      } else if (perfil.rol === 'VETERINARIO') {
        this.router.navigate(['/mascotas/buscar']);
      } else if (perfil.rol === 'ADMIN') {
        this.router.navigate(['/administrador']);
      }
    });
    this.lightModeService.registrarLoginComponent(this);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  // Método para manejar el login
  onSubmit(): void {
    // Validar que los campos no estén vacíos
    if (this.usuario.username === '' || (this.usuario.password === '' && this.tipoLogin !== 'CLIENTE')) {
      this.loginError = 'Por favor, llena todos los campos';
      return;
    }

    // Si el tipo de login es cliente
    if (this.tipoLogin === 'CLIENTE') {
      this.usuario.password = "";
      this.clienteService.login(this.usuario).pipe(
        tap(token => {
          this.perfilService.tokenAssigned(token.toString());
        }),
        switchMap(() => this.clienteService.getPerfil()),
        tap(perfil => {
          // Guardar el perfil en localStorage
          this.perfilService.login(perfil);
        }),
        tap(() => {
          // Redirigir a la página correspondiente
          this.router.navigate(['/mis-mascotas']);
        }),
        catchError(error => {
          this.loginError = 'Cliente no encontrado';
          return of(null); // Devuelve un observable vacío para finalizar la cadena
        })
      ).subscribe();

      // Si el tipo de login es veterinario
    } else if (this.tipoLogin === 'VETERINARIO') {
      this.veterinarioService.login(this.usuario).pipe(
        tap(token => {
          this.perfilService.tokenAssigned(token.toString());
        }),
        switchMap(() => this.veterinarioService.getPerfil()),
        tap(perfil => {
          // Guardar el perfil en localStorage
          this.perfilService.login(perfil);
        }),
        tap(() => {
          // Redirigir a la página correspondiente
          this.router.navigate(['/mis-mascotas']);
        }),
        catchError(error => {
          this.loginError = 'Credenciales inválidas';
          return of(null); // Devuelve un observable vacío para finalizar la cadena
        })
      ).subscribe();

      // Si el tipo de login es administrador
    } else if (this.tipoLogin === 'ADMIN') {
      this.adminService.login(this.usuario).pipe(
        tap(token => {
          this.perfilService.tokenAssigned(token.toString());
        }),
        switchMap(() => this.adminService.getPerfil()),
        tap(perfil => {
          // Guardar el perfil en localStorage
          this.perfilService.login(perfil);
        }),
        tap(() => {
          // Redirigir a la página correspondiente
          this.router.navigate(['/administrador']);
        }),
        catchError(error => {
          this.loginError = 'Credenciales inválidas';
          return of(null); // Devuelve un observable vacío para finalizar la cadena
        })
      ).subscribe();
    }
  }

  cambiarModo(isModoOscuro: Boolean){
    this.isModoOscuro = Boolean(isModoOscuro);
  }
}
