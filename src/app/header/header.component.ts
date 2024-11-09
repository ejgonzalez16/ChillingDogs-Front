import {ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  buttonLogout!: HTMLElement | null;
  buscarMascotas!: HTMLElement | null;
  buscarClientes!: HTMLElement | null;
  buscarTratamientos!: HTMLElement | null;
  buscarVeterinarios!: HTMLElement | null;

  perfil: Perfil = {
    nombre: '',
    foto: '',
    rol: 'GUEST'
  };

  constructor(
    private router: Router,
    private perfilService: PerfilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      this.perfil = perfil;
    });
    
  }

  ngAfterViewInit(): void {
    this.navbar = document.getElementById("navbar");
    this.navbar?.classList.add("nav-dark")
    this.nosotros = document.getElementById("nosotros");
    this.servicios = document.getElementById("servicios");
    this.casos = document.getElementById("casos");
    this.buttonLogout = document.getElementById("btnLogout")
    this.buscarMascotas = document.getElementById("btnBuscarMascotas")
    this.buscarClientes = document.getElementById("btnBuscarClientes")
    this.buscarTratamientos = document.getElementById("btnBuscarTratamientos")
    this.buscarVeterinarios = document.getElementById("btnBuscarVeterinarios")
  }

  logout(): void {
    this.perfilService.logout();
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
      this.navbar?.classList.replace("nav-light", "nav-dark");

      this.nosotros?.classList.replace("link-dark", "link-light");
      this.servicios?.classList.replace("link-dark", "link-light");
      this.casos?.classList.replace("link-dark", "link-light");
      this.buttonLogout?.classList.replace("button-light", "button");
      this.buscarClientes?.classList.replace("button-light", "button");
      this.buscarMascotas?.classList.replace("button-light", "button");
      this.buscarTratamientos?.classList.replace("button-light", "button");
      this.buscarVeterinarios?.classList.replace("button-light", "button");
      return;
    }
    this.navbar?.classList.replace("nav-dark", "nav-light");

    this.nosotros?.classList.replace("link-light", "link-dark");
    this.servicios?.classList.replace("link-light", "link-dark");
    this.casos?.classList.replace("link-light", "link-dark");
    this.buttonLogout?.classList.replace("button", "button-light");
    this.buscarClientes?.classList.replace("button", "button-light");
    this.buscarMascotas?.classList.replace("button", "button-light");
    this.buscarTratamientos?.classList.replace("button", "button-light");
    this.buscarTratamientos?.classList.replace("button", "button-light");
  }
}
