import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from "@angular/router";
import {Usuario} from "../modelo/usuario";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input()
  landing: boolean = false;
  isModoOscuro: boolean = true;
  navbar!: HTMLElement | null;
  nosotros!: HTMLElement | null;
  servicios!: HTMLElement | null;
  casos!: HTMLElement | null;

  userInfo: Usuario = { rol: 'guest', id: -1, nombre: '', cedula: '', foto: '' };

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse a la información del usuario
    this.authService.userInfo$.subscribe(userInfo => {
      this.userInfo = userInfo;
    })
    this.navbar = document.getElementById("navbar");
    this.navbar?.classList.add("nav-dark");

    this.nosotros = document.getElementById("linkSobre");

    this.servicios = document.getElementById("linkServicios");

    this.casos = document.getElementById("linkCasos");
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToHome(): void {
    this.router.navigate(['/landing']);
  }

  cambiarModo(isModoOscuro: Boolean){
    if(isModoOscuro){
      this.navbar?.classList.remove("nav-light");
      this.navbar?.classList.add("nav-dark");

      this.nosotros?.classList.remove("link-dark");
      this.nosotros?.classList.add("link-light");

      this.servicios?.classList.remove("link-dark");
      this.servicios?.classList.add("link-light");

      this.casos?.classList.remove("link-dark");
      this.casos?.classList.add("link-light");
      return;
    }
    this.navbar?.classList.remove("nav-dark");
    this.navbar?.classList.add("nav-light");

    this.nosotros?.classList.remove("link-light");
    this.nosotros?.classList.add("link-dark");

    this.servicios?.classList.remove("link-light");
    this.servicios?.classList.add("link-dark");

    this.casos?.classList.remove("link-light");
    this.casos?.classList.add("link-dark");
  }
}
