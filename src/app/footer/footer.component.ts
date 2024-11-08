import {ActivatedRoute, Router} from "@angular/router";
import {PerfilService} from "../service/perfil.service";
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  rolUsuario: string = 'ANY';
  footerElement!: HTMLElement | null;

  constructor(
    private perfilService: PerfilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      this.rolUsuario = perfil.rol;
    });
    this.footerElement = document.getElementById('footer');
    this.route.queryParams.subscribe(params => {
      
      var isModoOscuro = params['isModoOscuro'] === 'true';
      if(!isModoOscuro && params['isModoOscuro']){
        if(this.footerElement){
          this.footerElement.classList.replace('footer', 'light-footer');
          const cambiarModoBtn = document.getElementById("cambiarModoBtn") as HTMLInputElement;
          cambiarModoBtn.checked = false;
          this.isModoOscuro = false;
        }
        
      }
    });
  }

  isModoOscuro = true;
  @Output() cambiarModoGeneral = new EventEmitter<Boolean>();

  cambiarModo(){
    this.isModoOscuro = !this.isModoOscuro;
    this.cambiarModoGeneral.emit(this.isModoOscuro);
    if (this.footerElement) {
      if(!this.isModoOscuro){
        this.footerElement.classList.replace('footer', 'light-footer');
        return;
      }
      this.footerElement.classList.replace('light-footer', 'footer');
    }
  }
}
