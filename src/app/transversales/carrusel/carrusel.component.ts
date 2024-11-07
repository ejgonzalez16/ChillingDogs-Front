import { Component, Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import {Router} from "@angular/router";
import {MascotaService} from "../../service/mascota.service";
import {TratamientoService} from "../../service/tratamiento.service";

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {
  @Input()
  mascotas: Mascota[] = [];

  @Input()
  rolUsuario!: string;

  carrusel: HTMLElement | null = null;

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
    private router: Router,
    private tratamientoService: TratamientoService
  ) { }

  ngOnInit(): void{
    this.carrusel = document.getElementById('carrusel');
  }

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
    console.log('Rol usuario:', this.rolUsuario);
    if (this.rolUsuario === 'CLIENTE') {
      this.router.navigate(['/mascotas/detalles', id]);
    } else {
      this.router.navigate(['/mascotas/buscar', id]);
    }
  }

  modificarMascota(id: number) {
    this.router.navigate(['/mascotas/modificar', id]);
  }

  eliminarMascota(id: number) {
    this.tratamientoService.deleteById(id);
    // Eliminar la mascota de la lista
    this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
  }

  cambiarModo(isModoOscuro: boolean){
    if(isModoOscuro){
      this.carrusel?.classList.replace('carrusel-light', 'carrusel-dark');
      return;
    }
    this.carrusel?.classList.replace('carrusel-dark', 'carrusel-light');
  }
}
