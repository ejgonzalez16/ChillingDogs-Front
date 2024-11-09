import { Component } from '@angular/core';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-tratamientos-mascota',
  templateUrl: './tratamientos-mascota.component.html',
  styleUrl: './tratamientos-mascota.component.scss'
})
export class TratamientosMascotaComponent {
  id!: number
  tratamientos: Tratamiento[] = [];
  isModoOscuro: boolean = true;

  constructor(private tratamientoService: TratamientoService,
              private route: ActivatedRoute, private lightModeService: LightModeServiceService
  ){}

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.tratamientoService.findAllMascota(this.id).subscribe(tratamientos =>{
      this.tratamientos = tratamientos
    });
    this.lightModeService.registrarTratamientosMascota(this);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  goBack() {
    // Ir a la página visitada justo antes con el botón de regresar
    window.history.back();
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
  }
}
