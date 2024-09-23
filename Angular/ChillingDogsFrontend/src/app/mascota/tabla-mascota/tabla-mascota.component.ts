import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];
  vet: string = 'vet';

  constructor(
    private mascotaService: MascotaService, private headerService: HeaderService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.findAll();
    this.headerService.setTipoLogueo('vet');
  }

  recargarMascotas(nombrePerro?: string) {
    this.mascotas = this.mascotaService.findAll().filter(mascota => mascota.nombre.includes(nombrePerro || ''));
    this.headerService.setTipoLogueo('vet');
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    this.mascotas = this.mascotaService.findAll();
  }
}
