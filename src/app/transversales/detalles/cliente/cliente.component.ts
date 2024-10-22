import { Component, Input } from '@angular/core';
import { Mascota } from '../../../modelo/mascota';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  @Input()
  mascota!: Mascota;
}
