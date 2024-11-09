import { Component, ViewChild } from '@angular/core';
import { Veterinario } from '../../modelo/veterinario';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { FormVeterinarioComponent } from '../form-veterinario/form-veterinario.component';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrl: './crear-veterinario.component.scss'
})
export class CrearVeterinarioComponent {
    veterinario: Veterinario = {
    id: 0,
    cedula: "",
    contrasena: "",
    especialidad: "",
    numeroAtenciones: 0,
    nombre: "",
    estado: "",
    foto: "",
    tratamientos: []
  }
  isModoOscuro: boolean = true
  @ViewChild(FormVeterinarioComponent) formVeterinario!: FormVeterinarioComponent;

  constructor(private lightModeService: LightModeServiceService){

  }

  ngOnInit(){
    this.lightModeService.registrarVeterinarioComponent(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.formVeterinario.cambiarModo(isModoOscuro);
  }
}
