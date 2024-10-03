import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Input()
  cedula!: number;

  constructor(private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit() {
    // Suscribirse a la info del usuario y si ya está logueado, redirigirlo a la página correspondiente
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol === 'cliente') {
        this.router.navigate(['/mis-mascotas', userInfo.cedula]);
      } else if(userInfo.rol === 'veterinario') {
        this.router.navigate(['/mascotas/buscar']);
      }
    });
  }

  onSubmit() {
    this.router.navigate(['/mis-mascotas', this.cedula]);
  }

  goToMascotas() {
    this.router.navigate(['/mascotas/buscar']);
  }
}
