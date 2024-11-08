import { Component, Input } from '@angular/core';
import { Mascota } from '../../../modelo/mascota';

@Component({
  selector: 'detalle-mascota',
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.scss'
})
export class MascotaComponent {

  @Input()
  mascota!: Mascota;
  seccionPeludo!: HTMLElement | null;

  ngOnInit(): void{
    this.seccionPeludo = document.getElementById("seccionPeludo");
  }

  cambiarModo(isModoOscuro: boolean){
    if(isModoOscuro){
      this.seccionPeludo?.classList.replace('section-dark', 'section-light');
      return;
    }
    this.seccionPeludo?.classList.replace('section-light', 'section-dark');
  }
}
