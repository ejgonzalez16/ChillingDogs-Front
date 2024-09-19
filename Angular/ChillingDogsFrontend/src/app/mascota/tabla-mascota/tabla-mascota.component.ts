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

  constructor(
    private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.findAll();
  }

}
