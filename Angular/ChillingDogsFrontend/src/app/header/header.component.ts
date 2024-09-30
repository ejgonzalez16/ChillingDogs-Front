import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'landing-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input()
  tipoLogueo: string = 'guest';

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
      this.headerService.tipoLogueo$.subscribe(tipo => {
          this.tipoLogueo = tipo;
      });
  }

  cambiarLogueo(tipo: string) {
    this.headerService.setTipoLogueo(tipo);
  }
}
