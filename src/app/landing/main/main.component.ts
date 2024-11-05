import { Component } from '@angular/core';
import { ReseniasService } from '../../service/resenias.service';
import { Resenia } from '../../Resenia';
import {PerfilService} from "../../service/perfil.service";
import {Router} from "@angular/router";

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
    private router: Router
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
}
