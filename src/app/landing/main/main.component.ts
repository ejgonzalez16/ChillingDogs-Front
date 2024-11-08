import { Component } from '@angular/core';
import { ReseniasService } from '../../service/resenias.service';
import { Resenia } from '../../Resenia';
import {PerfilService} from "../../service/perfil.service";
import {ActivatedRoute, Router} from "@angular/router";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'landing-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  resenias!: Resenia[];
  chatAbierto: boolean = false;
  imagenChat: string = 'assets/images/simbolo_chat.png';
  isFading: boolean = false;
  presentacion!: HTMLElement | null;
  sobreNosotros!: HTMLElement | null;
  servicios!: HTMLElement | null;
  casosDeExito!: HTMLElement | null;
  isModoOscuro: boolean = true;

  responsiveOptions: any[] = [
    {
      breakpoint: '1099px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private reseniaService: ReseniasService,
    private perfilService: PerfilService,
    private router: Router,
    private lightModeService: LightModeServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Si el usuario ya está autenticado, redirigir según su rol
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol === 'CLIENTE') {
        this.router.navigate(['/mis-mascotas']);
      } else if (perfil.rol === 'VETERINARIO') {
        this.router.navigate(['/mascotas/buscar']);
      } else if (perfil.rol === 'ADMIN') {
        this.router.navigate(['/administrador']);
      } else {
        this.resenias = this.reseniaService.findAll();
      }
    });
    this.lightModeService.registrarLandingComponent(this);
    this.presentacion = document.getElementById('presentacion');
    this.sobreNosotros = document.getElementById('sobreNosotros');
    this.servicios = document.getElementById('servicios');
    this.casosDeExito = document.getElementById('casosDeExito');
    if(!this.lightModeService.isModoOscuro){
      this.presentacion?.classList.replace('seccionDorada', 'seccionDorada-light');
      this.sobreNosotros?.classList.replace('seccionAzul', 'seccionAzul-light');
      this.servicios?.classList.replace('seccionDorada', 'seccionDorada-light');
      this.casosDeExito?.classList.replace('seccionAzul', 'seccionAzul-light');
    }
  }

  openChat(){
    if (this.chatAbierto) {
      this.chatAbierto = false;
      this.imagenChat = 'assets/images/simbolo_chat.png';
  } else {
      this.chatAbierto = true;
      this.imagenChat = 'assets/images/simbolo_chat_x.png';
  }

  }

  cambiarModo(isModoOscuro: boolean) {  
    if(isModoOscuro){
      this.presentacion?.classList.replace('seccionDorada-light', 'seccionDorada');
      this.sobreNosotros?.classList.replace('seccionAzul-light', 'seccionAzul');
      this.servicios?.classList.replace('seccionDorada-light', 'seccionDorada');
      this.casosDeExito?.classList.replace('seccionAzul-light', 'seccionAzul');
      return;
    }
    this.presentacion?.classList.replace('seccionDorada', 'seccionDorada-light');
    this.sobreNosotros?.classList.replace('seccionAzul', 'seccionAzul-light');
    this.servicios?.classList.replace('seccionDorada', 'seccionDorada-light');
    this.casosDeExito?.classList.replace('seccionAzul', 'seccionAzul-light');
  }
}
