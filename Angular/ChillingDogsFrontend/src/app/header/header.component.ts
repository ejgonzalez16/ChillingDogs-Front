import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input()
  landing: boolean = false;

  userInfo: { rol: string, nombre: string, cedula: string, foto: string } = { rol: 'guest', nombre: '', cedula: '', foto: '' };

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse a la información del usuario
    this.authService.userInfo$.subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  logout(): void {
    this.authService.actualizarUserInfo('guest', -1, '', '', '');
    this.goToLogin();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToHome(): void {
    this.router.navigate(['/landing']);
  }
}
