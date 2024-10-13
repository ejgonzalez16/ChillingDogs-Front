import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {VeterinarioService} from "../../service/veterinario.service";

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  cedula: string = '';
  contrasena: string = '';
  tipoLogin: string = 'cliente';
  loginError: string = '';

  constructor(private router: Router,
              private authService: AuthService,
              private veterinarioService: VeterinarioService
              ) { }

  ngOnInit() {
    // Suscribirse a la info del usuario y si ya está logueado, redirigirlo a la página correspondiente
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol === 'cliente') {
        this.router.navigate(['/mis-mascotas', userInfo.cedula]);
      } else if(userInfo.rol === 'veterinario') {
        this.router.navigate(['/mascotas/buscar']);
      } else if (userInfo.rol === 'admin') {
        this.router.navigate(['/admin']);
      }
    });
  }

  onSubmit() {
    // Validar que la cédula y la contraseña no estén vacías
    if(this.cedula === '' || (this.contrasena === '' && this.tipoLogin !== 'cliente')) {
      this.loginError = 'Por favor, llena todos los campos';
      return;
    }
    console.log(this.cedula, this.contrasena);
    if(this.tipoLogin === 'cliente') {
      this.router.navigate(['/mis-mascotas', this.cedula]);
    } else if(this.tipoLogin === 'veterinario') {
      this.veterinarioService.findByCedulaAndContrasena(this.cedula, this.contrasena).subscribe(
        veterinario => {
          if(veterinario) {
            console.log(veterinario);
            this.authService.actualizarUserInfo('veterinario', veterinario.nombre, veterinario.cedula, veterinario.foto);
            this.router.navigate(['/mascotas/buscar']);
          }
        },
        error => {
          this.loginError = 'Credenciales inválidas';
        }
      );
    }
  }

  goToMascotas() {
    this.router.navigate(['/mascotas/buscar']);
  }
}
