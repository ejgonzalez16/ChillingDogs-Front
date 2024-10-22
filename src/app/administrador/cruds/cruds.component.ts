import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'admin-cruds',
  templateUrl: './cruds.component.html',
  styleUrl: './cruds.component.scss'
})
export class CRUDsComponent {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  // Retorna al inicio de sesion
  goToHome(): void {
    this.router.navigate(['/landing']);
  }

  // Cierra la sesión del administrador completamente
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
