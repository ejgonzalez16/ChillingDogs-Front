import { Component } from '@angular/core';
import { ReseniasService } from '../../service/resenias.service';
import { Resenia } from '../../Resenia';
import {PerfilService} from "../../service/perfil.service";
import {ActivatedRoute, Router} from "@angular/router";
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import { Email } from '../../modelo/email';


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

  correo: Email = {
    nombre: '',
    apellido: '',
    pelidutoName: '',
    correo: '',
    fecha: ''
  }

  constructor(
    private reseniaService: ReseniasService,
    private perfilService: PerfilService,
    private router: Router,
    private lightModeService: LightModeServiceService,
    private route: ActivatedRoute, private emailService: EmailService
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
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  onSubmit(){
    if(this.correo.nombre == '' || this.correo.apellido == '' || this.correo.pelidutoName == '' || this.correo.correo == '' || this.correo.fecha == ''){
      alert('Todos los campos son obligatorios');
      return;
    }
    if(this.correo.correo.indexOf('@') === -1 || this.correo.correo.indexOf('.') === -1 || this.correo.correo.length < 5){
      alert('El correo debe ser valido');
      return;
    }
    this.emailService.envarEmail(this.correo).subscribe(
      () => {
        alert('El correo se ha enviado exitosamente, revisa tu correo!');
      }
    )
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
    this.isModoOscuro = isModoOscuro;
  }
}
