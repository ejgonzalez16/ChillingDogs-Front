import {Component, Input} from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrl: './crear-tratamiento.component.scss'
})
export class CrearTratamientoComponent {
  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute
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
  }
}
