import {Component, Input} from '@angular/core';

@Component({
  selector: 'landing-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input()
  tipoLogueo: string = "guest";

  cambiarLogueo(logueo: string) {
    this.tipoLogueo = logueo
  }
}
