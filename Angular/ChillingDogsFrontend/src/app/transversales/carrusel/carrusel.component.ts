import { Component, Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { PrimeNGConfig } from 'primeng/api';
import { Resenia } from '../../Resenia';
import { ReseniasService } from '../../service/resenias.service';


@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {
  @Input()
  mascotas: Mascota[] = [];

  // resenias: Resenia[] = [];
  indiceActivo = 0;

  /*@Input()
  showResenias: boolean = false;*/

  responsiveOptions: any[] = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(private primengConfig: PrimeNGConfig, private reseniaService: ReseniasService) { }

  ngOnInit() {
    // this.resenias = this.reseniaService.findAll();
    setTimeout(() => {
      this.avanzar();
      this.retroceder();
    }, 100); // Retraso para forzar la re-renderización
  }

  avanzar() {
    this.indiceActivo = (this.indiceActivo + 1) % this.mascotas.length;  // Incrementa el índice y lo vuelve circular
  }

  retroceder() {
    this.indiceActivo = (this.indiceActivo - 1 + this.mascotas.length) % this.mascotas.length;  // Decrementa el índice y lo vuelve circular
  }

  onPageChange(event: any) {
    this.indiceActivo = event.page;
  }

  detallesMascota(id:number){} //TODO
}
