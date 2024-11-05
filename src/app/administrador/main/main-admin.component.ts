import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'admin-main',
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.scss'
})
export class MainAdminComponent {
  nombreAdministrador!: string;
  constructor(
    private router: Router,
    private perfilService: PerfilService
  ) { }

  ngOnInit() {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
      this.nombreAdministrador = perfil.nombre;
    });
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

}
