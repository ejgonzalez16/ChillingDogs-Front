import { Component, Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import {Router} from "@angular/router";

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {
  @Input()
  mascotas: Mascota[] = [];

  responsiveOptions: any[] = [
    {
        breakpoint: '1099px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(
    private router: Router
  ) { }

  getBadgeClass(status: string) {
    switch (status.toLowerCase()) {
      case 'activo':
        return 'estadoActivo';
      case 'inactivo':
        return 'estadoInactivo';
    }
    return 'estadoActivo';
  }

  verDetallesMascota(id: number) {
    this.router.navigate(['/mascotas/detalles', id]);
  }
}
