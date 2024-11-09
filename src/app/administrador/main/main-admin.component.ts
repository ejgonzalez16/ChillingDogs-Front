import { Component, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { CRUDsComponent } from '../cruds/cruds.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'admin-main',
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.scss'
})
export class MainAdminComponent {
  nombreAdministrador!: string;
  isModoOscuro: boolean = true;
  @ViewChild(CRUDsComponent) cruds!: CRUDsComponent | null;
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent | null;

  constructor(
    private router: Router,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService
  ) { }

  ngOnInit() {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
      this.nombreAdministrador = perfil.nombre;
    });
    this.lightModeService.registrarMainAdmin(this);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.cruds?.cambiarModo(isModoOscuro);
    this.dashboard?.cambiarModo(isModoOscuro);
  }
}
