import {Component, Input, ViewChild} from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { MascotaComponent } from '../../transversales/detalles/mascota/mascota.component';
import { FormTratamientoComponent } from '../form-tratamiento/form-tratamiento.component';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrl: './crear-tratamiento.component.scss'
})
export class CrearTratamientoComponent {
  mascota!: Mascota;
  isModoOscuro: boolean = true;
  @ViewChild(MascotaComponent) mascotaComponent?: MascotaComponent
  @ViewChild(FormTratamientoComponent) tratamientoComponent?: FormTratamientoComponent

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute, private lightModeService: LightModeServiceService
  ) {
  }

  ngOnInit() {
    // Coger el idMascota que hay en params para buscar la mascota y mandársela al componente hijo
    this.route.paramMap.pipe(
      mergeMap(params => {
        const idMascota = +params.get('idMascota')!;
        if (idMascota) {
          return this.mascotaService.findById(idMascota);
        } else {
          // Retornar observable vacío si no hay idMascota
          return of(null);
        }
      })
    ).subscribe(mascota => {
      if (!mascota) {
        alert('No se ha encontrado la mascota');
        return;
      }
      this.mascota = mascota;
      console.log('mascota', mascota);
    });
    this.lightModeService.registrarCrearTratamientosComponent(this);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.mascotaComponent?.cambiarModo(isModoOscuro);
    this.tratamientoComponent?.cambiarModo(isModoOscuro);
  }
}
