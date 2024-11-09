import { Component, Input } from '@angular/core';
import { Mascota } from '../../../modelo/mascota';
import { ActivatedRoute } from '@angular/router';
import { LightModeServiceService } from '../../../service/light-mode-service.service';

@Component({
  selector: 'detalle-mascota',
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.scss'
})
export class MascotaComponent {

  @Input()
  mascota!: Mascota;
  seccionPeludo!: HTMLElement | null;
  isModoOscuro: boolean = true;

  constructor(private lightModeService: LightModeServiceService){

  }

  ngAfterViewInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
      this.seccionPeludo = document.getElementById("seccionPeludo");
      this.seccionPeludo?.classList.replace("section-light", "section-dark");
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
