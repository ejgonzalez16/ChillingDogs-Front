import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PerfilService} from "../service/perfil.service";

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

}
