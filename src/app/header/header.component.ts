import {ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../modelo/usuario";
import {Perfil} from "../modelo/perfil";
import {isPlatformBrowser} from "@angular/common";
import {PerfilService} from "../service/perfil.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input()
  landing: boolean = false;
  navbar!: HTMLElement | null;
  nosotros!: HTMLElement | null;
  servicios!: HTMLElement | null;
  casos!: HTMLElement | null;
  header: HTMLElement | null = null;

  perfil: Perfil = {
    nombre: '',
    foto: '',
    rol: 'GUEST'
  };

  constructor(
    private router: Router,
    private perfilService: PerfilService,
  ) {}

  ngOnInit(): void {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      this.perfil = perfil;
    });
  }

  ngAfterViewInit(): void {
    this.navbar = document.getElementById("navbar");
    this.navbar?.classList.add("nav-dark");

    this.nosotros = document.getElementById("nosotros");
    this.servicios = document.getElementById("servicios");
    this.casos = document.getElementById("casos");
    this.header = document.getElementById("header");
  }

  logout(): void {
    this.perfilService.logout();
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    var isModoOscuro = true;
    if(this.navbar?.classList.contains("nav-light")) isModoOscuro = false;
    this.router.navigate(['/login'], { queryParams: { isModoOscuro: isModoOscuro } });
  }

  goToHome(): void {
    var isModoOscuro = true;
    if(this.navbar?.classList.contains("nav-light")) isModoOscuro = false;
    this.router.navigate(['/landing'], { queryParams: { isModoOscuro: isModoOscuro } });
  }

  cambiarModo(isModoOscuro: Boolean){
    if(isModoOscuro){
      this.navbar?.classList.replace("nav-light", "nav-dark");

      this.nosotros?.classList.replace("link-dark", "link-light");
      this.servicios?.classList.replace("link-dark", "link-light");
      this.casos?.classList.replace("link-dark", "link-light");
      this.header?.classList.replace("header-light", "header-dark")
      return;
    }
    this.navbar?.classList.replace("nav-dark", "nav-light");

    this.nosotros?.classList.replace("link-light", "link-dark");
    this.servicios?.classList.replace("link-light", "link-dark");
    this.casos?.classList.replace("link-light", "link-dark");
    this.header?.classList.replace("header-dark", "header-light")
  }
}
