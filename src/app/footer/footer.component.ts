import {Router} from "@angular/router";
import {PerfilService} from "../service/perfil.service";
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  rolUsuario: string = 'ANY';

  constructor(
    private perfilService: PerfilService,
  ) {}

  ngOnInit(): void {
    this.perfilService.perfilInfo$.subscribe(perfil => {
      this.rolUsuario = perfil.rol;
    });
  }

  isModoOscuro = true;
  @Output() cambiarModoGeneral = new EventEmitter<Boolean>();

  cambiarModo(){
    this.isModoOscuro = !this.isModoOscuro;
    const footerElement = document.getElementById('footer');
    console.log(footerElement);
    this.cambiarModoGeneral.emit(this.isModoOscuro);
    if (footerElement) {
      if(!this.isModoOscuro){
        footerElement.classList.replace('footer', 'light-footer');
        return;
      }
      footerElement.classList.replace('light-footer', 'footer');
    }
  }
}
