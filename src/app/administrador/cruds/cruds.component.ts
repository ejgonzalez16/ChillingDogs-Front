import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'admin-cruds',
  templateUrl: './cruds.component.html',
  styleUrl: './cruds.component.scss'
})
export class CRUDsComponent {

  constructor(
    private router: Router,
    private perfilService: PerfilService
  ) { }

  ngOnInit() {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
  }

  // Retorna al inicio de sesion
  goToHome(): void {
    this.router.navigate(['/landing']);
  }

  // Cierra la sesión del administrador completamente
  logout(): void {
    this.perfilService.logout();
    this.router.navigate(['/login']);
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
