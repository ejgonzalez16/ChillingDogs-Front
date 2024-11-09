import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'admin-cruds',
  templateUrl: './cruds.component.html',
  styleUrl: './cruds.component.scss'
})
export class CRUDsComponent {
  isModoOscuro: boolean = true;

  constructor(
    private router: Router,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService
  ) { }

  ngOnInit() {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
    this.isModoOscuro = this.lightModeService.isModoOscuro;
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

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
