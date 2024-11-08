import { Component, Input } from '@angular/core';
import { Mascota } from '../../../modelo/mascota';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute){

  }

  ngAfterViewInit(){
    this.route.queryParams.subscribe(params => {
      var isModoOscuro = params['isModoOscuro'] === 'true';
      if(!isModoOscuro && params['isModoOscuro']){
        this.isModoOscuro = isModoOscuro;
      }
    });
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
