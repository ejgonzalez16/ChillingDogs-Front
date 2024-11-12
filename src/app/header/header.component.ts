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
  isModoOscuro: boolean = true;

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
      console.log(this.perfil.rol)
    });
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
    this.isModoOscuro = Boolean(isModoOscuro);
  }
}
