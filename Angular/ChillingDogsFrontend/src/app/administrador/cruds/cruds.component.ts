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
  goToHome(): void {
    this.router.navigate(['/landing']);
  }

  logout(): void {
    this.authService.actualizarUserInfo('guest', '', '', '');
    this.router.navigate(['/login']);
  }
}
