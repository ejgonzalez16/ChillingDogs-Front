import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import { Mascota } from '../../modelo/mascota';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-bar-mascota',
  templateUrl: './search-bar-mascota.component.html',
  styleUrl: './search-bar-mascota.component.scss'
})
export class SearchBarMascotaComponent {
  nombrePerro!: string;
  filtroEstado: string = "";
  filtroBusqueda: string = "";
  mascotas: Mascota[] = [];
  isModoOscuro: boolean = true;

  @Output() actualizarLista = new EventEmitter<{nombre: string, filterEstado: string, filterBusqueda: string}>();

  constructor(private router: Router,
    private lightModeService: LightModeServiceService) {}


  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit(){
    // Buscar mascota por nombre
    this.actualizarLista.emit({
      nombre : this.nombrePerro,
      filterEstado : this.filtroEstado,
      filterBusqueda : this.filtroBusqueda
    });
  }

  crearMascota(){
    this.router.navigate(['/mascotas/registrar']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
