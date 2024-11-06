import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {VeterinarioService} from "../../service/veterinario.service";
import {AdminService} from "../../service/admin.service";
import {userInfo} from "node:os";
import {Usuario} from "../../modelo/usuario";
import {ClienteService} from "../../service/cliente.service";
import { isObservable } from 'rxjs';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isModoOscuro!: boolean;
  cedula: string = '';
  contrasena: string = '';
  tipoLogin: string = 'cliente';
  loginError: string = '';
  login!: HTMLElement | null;
  loginPart!: HTMLElement | null;


  constructor(private router: Router,
              private authService: AuthService,
              private clienteService: ClienteService,
              private veterinarioService: VeterinarioService,
              private adminService: AdminService,
              private lightModeService: LightModeServiceService
              ) { }

  ngOnInit(): void {
    // Si el usuario ya está autenticado, redirigir según su rol
    this.authService.userInfo$.subscribe(userInfo => {
      if (userInfo) {
        this.redirigirSegunRol(userInfo);
      }
    });
    this.login = document.getElementById("login");
    this.loginPart = document.getElementById("loginPart");
    this.lightModeService.registrarLoginComponent(this);
  }

  // Método para manejar el login
  onSubmit(): void {
    // Validar que los campos no estén vacíos
    if (this.cedula === '' || (this.contrasena === '' && this.tipoLogin !== 'cliente')) {
      this.loginError = 'Por favor, llena todos los campos';
      return;
    }

    // Si el tipo de login es cliente
    if (this.tipoLogin === 'cliente') {
      this.clienteService.findByCedula(this.cedula).subscribe(
        cliente => {
          if (cliente) {
            // Crear el objeto userInfo con los datos del cliente
            const userInfo = {
              rol: 'cliente',
              id: cliente.id,
              nombre: cliente.nombre,
              cedula: cliente.cedula,
              foto: cliente.foto
            };

            // Actualizar el estado del usuario y guardar en localStorage
            this.authService.actualizarUsuarioInfo(userInfo);

            // Redirigir a la página correspondiente
            this.router.navigate(['/mis-mascotas', cliente.cedula]);
          } else {
            this.loginError = 'Cliente no encontrado';
          }
        },
        error => {
          this.loginError = 'Cliente no encontrado';
        }
      );

      // Si el tipo de login es veterinario
    } else if (this.tipoLogin === 'veterinario') {
      this.veterinarioService.findByCedulaAndContrasena(this.cedula, this.contrasena).subscribe(
        veterinario => {
          if (veterinario) {
            // Crear el objeto userInfo con los datos del veterinario
            const userInfo = {
              rol: 'veterinario',
              id: veterinario.id,
              nombre: veterinario.nombre,
              cedula: veterinario.cedula,
              foto: veterinario.foto
            };

            // Actualizar el estado del usuario y guardar en localStorage
            this.authService.actualizarUsuarioInfo(userInfo);

            // Redirigir a la página correspondiente
            this.router.navigate(['/mascotas/buscar']);
          } else {
            this.loginError = 'Credenciales inválidas';
          }
        },
        error => {
          this.loginError = 'Credenciales inválidas';
        }
      );

      // Si el tipo de login es administrador
    } else if (this.tipoLogin === 'administrador') {
      this.adminService.findByCedulaAndContrasena(this.cedula, this.contrasena).subscribe(
        admin => {
          if (admin) {
            // Crear el objeto userInfo con los datos del administrador
            const userInfo = {
              rol: 'admin',
              id: admin.id,
              nombre: admin.nombre,
              cedula: admin.cedula,
              foto: admin.foto
            };

            // Actualizar el estado del usuario y guardar en localStorage
            this.authService.actualizarUsuarioInfo(userInfo);

            // Redirigir a la página correspondiente
            this.router.navigate(['/administrador', admin.cedula]);
          } else {
            this.loginError = 'Credenciales inválidas';
          }
        },
        error => {
          this.loginError = 'Credenciales inválidas';
        }
      );
    }
  }


  // Función para redirigir según el rol del usuario
  private redirigirSegunRol(userInfo: any): void {
    if (userInfo.rol === 'cliente') {
      this.router.navigate(['/mis-mascotas', userInfo.cedula]);
    } else if (userInfo.rol === 'veterinario') {
      this.router.navigate(['/mascotas/buscar']);
    } else if (userInfo.rol === 'admin') {
      this.router.navigate(['/administrador', userInfo.cedula]);
    }
  }

  cambiarModo(isModoOscuro: Boolean){
    this.isModoOscuro = Boolean(isModoOscuro);
    if(this.isModoOscuro){
      this.login?.classList.remove("login-light");
      this.login?.classList.add("login-black");

      this.loginPart?.classList.remove("login-part-light");
      this.loginPart?.classList.add("login-part");
      return;
    }
    this.login?.classList.remove("login-black");
    this.login?.classList.add("login-light");

    this.loginPart?.classList.remove("login-part");
    this.loginPart?.classList.add("login-part-light");
  }
}
