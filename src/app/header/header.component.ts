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
    this.route.queryParams.subscribe(params => {
      
      var isModoOscuro = params['isModoOscuro'] === 'true';
      if(!isModoOscuro && params['isModoOscuro']){
        this.navbar?.classList.replace("nav-dark", "nav-light");
        this.nosotros?.classList.replace("link-light", "link-dark");
        this.servicios?.classList.replace("link-light", "link-dark");
        this.casos?.classList.replace("link-light", "link-dark");
        this.buttonLogout?.classList.replace("bg-dark", "bg-white");
        this.buscarClientes?.classList.replace("bg-dark", "bg-white");
        this.buscarMascotas?.classList.replace("bg-dark", "bg-white");
        this.buscarTratamientos?.classList.replace("bg-dark", "bg-white");
        this.buscarTratamientos?.classList.replace("bg-dark", "bg-white");
      }
    });
  }

  logout(): void {
    this.perfilService.logout();
    var isModoOscuro = true;
    if(this.navbar?.classList.contains("nav-light")) isModoOscuro = false;
    this.router.navigate(['/login'], { queryParams: { isModoOscuro: isModoOscuro } });
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
      this.buttonLogout?.classList.replace("bg-white", "bg-dark");
      this.buscarClientes?.classList.replace("bg-white", "bg-dark");
      this.buscarMascotas?.classList.replace("bg-white", "bg-dark");
      this.buscarTratamientos?.classList.replace("bg-white", "bg-dark");
      this.buscarVeterinarios?.classList.replace("bg-white", "bg-dark");
      return;
    }
    this.navbar?.classList.replace("nav-dark", "nav-light");

    this.nosotros?.classList.replace("link-light", "link-dark");
    this.servicios?.classList.replace("link-light", "link-dark");
    this.casos?.classList.replace("link-light", "link-dark");
    this.buttonLogout?.classList.replace("bg-dark", "bg-white");
    this.buscarClientes?.classList.replace("bg-dark", "bg-white");
    this.buscarMascotas?.classList.replace("bg-dark", "bg-white");
    this.buscarTratamientos?.classList.replace("bg-dark", "bg-white");
    this.buscarTratamientos?.classList.replace("bg-dark", "bg-white");
  }
}
