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

  constructor(private lightModeService: LightModeServiceService){

  }

  ngAfterViewInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
