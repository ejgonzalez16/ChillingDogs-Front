import { Component, ViewChild } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { FormDrogaComponent } from '../form-droga/form-droga.component';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-crear-droga',
  templateUrl: './crear-droga.component.html',
  styleUrl: './crear-droga.component.scss'
})
export class CrearDrogaComponent {
  droga: Droga = {
    id: 0,
    nombre: '',
    precioCompra: 0,
    precioVenta: 0,
    unidadesDisponibles: 0,
    unidadesVendidas: 0,
    tratamientos: []
  }
  
  isModoOscuro: boolean = true;
  @ViewChild(FormDrogaComponent) formDroga!: FormDrogaComponent;

  constructor(private lightModeService: LightModeServiceService) { }
  ngOnInit(){
    this.lightModeService.registrarCrearDroga(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.formDroga.cambiarModo(isModoOscuro);
  }
}
