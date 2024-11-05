import { Component } from '@angular/core';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';

@Component({
  selector: 'app-tratamientos-mascota',
  templateUrl: './tratamientos-mascota.component.html',
  styleUrl: './tratamientos-mascota.component.scss'
})
export class TratamientosMascotaComponent {
  id!: number
  tratamientos: Tratamiento[] = [];

  constructor(private tratamientoService: TratamientoService,
              private route: ActivatedRoute,
  ){}

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.tratamientoService.findAllMascota(this.id).subscribe(tratamientos =>{
      this.tratamientos = tratamientos
    });
  }

  goBack() {
    // Ir a la página visitada justo antes con el botón de regresar
    window.history.back();
  }
}
