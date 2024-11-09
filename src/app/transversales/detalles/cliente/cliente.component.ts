import { Component, Input } from '@angular/core';
import { Mascota } from '../../../modelo/mascota';
import { LightModeServiceService } from '../../../service/light-mode-service.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  @Input()
  mascota!: Mascota;
  isModoOscuro: boolean = true;
  seccionPeludo: HTMLElement | null = null;

  constructor(private lightModeService: LightModeServiceService){

  }

  ngAfterViewInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
      this.seccionPeludo = document.getElementById("seccionPeludo");
      this.seccionPeludo?.classList.remove("section-light");
      this.seccionPeludo?.classList.add("section-dark");
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
