import { Component, ViewChild } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { FormMascotaComponent } from '../form-mascota/form-mascota.component';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrl: './crear-mascota.component.scss'
})
export class CrearMascotaComponent {
  mascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    foto: '',
    estado: '',
    cliente: {
      id: 0,
      cedula: '',
      nombre: '',
      correo: '',
      celular: '',
      foto: '',
      mascotas: []
    },
    tratamientos:[]
  };
  isModoOscuro: boolean = true;
  @ViewChild(FormMascotaComponent) formMascota!: FormMascotaComponent;

  constructor(private lightModeService: LightModeServiceService) { }

  ngOnInit(){
    this.lightModeService.registrarCrearMascota(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.formMascota.cambiarModo(isModoOscuro);
  }
}
