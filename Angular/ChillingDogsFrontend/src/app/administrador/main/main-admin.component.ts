import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-main',
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.scss'
})
export class MainAdminComponent {
  nombreAdministrador!: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
      this.nombreAdministrador = userInfo.nombre;
    });
  }

}
