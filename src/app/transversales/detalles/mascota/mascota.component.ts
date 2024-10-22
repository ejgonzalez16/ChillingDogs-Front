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
}
