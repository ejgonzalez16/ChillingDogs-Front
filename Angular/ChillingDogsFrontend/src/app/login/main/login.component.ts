import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  cedula!: string;
  contrasena: string = '';
  tipoLogin: string = 'cliente';

  constructor(private router: Router,
              private authService: AuthService,
              private clienteService: ClienteService
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
    if(this.tipoLogin === 'cliente') {
      this.router.navigate(['/mis-mascotas', this.cedula]);
    } else if(this.tipoLogin === 'veterinario') {
      // this.router.navigate(['/mascotas/buscar']);
    }
  }

  goToMascotas() {
    this.router.navigate(['/mascotas/buscar']);
  }
}
