import { Component } from '@angular/core';
import {Mascota} from "../mascota";
import {MascotaService} from "../../service/mascota.service";

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];
  vet: string = 'vet';

  constructor(
    private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.findAll();
  }

  recargarMascotas(nombrePerro?: string) {
    this.mascotas = this.mascotaService.findAll().filter(mascota => mascota.nombre.includes(nombrePerro || ''));
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    this.mascotas = this.mascotaService.findAll();
  }
}
