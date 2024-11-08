import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import { Mascota } from '../../modelo/mascota';

@Component({
  selector: 'app-search-bar-mascota',
  templateUrl: './search-bar-mascota.component.html',
  styleUrl: './search-bar-mascota.component.scss'
})
export class SearchBarMascotaComponent {
  nombrePerro!: string;
  filtroEstado: string = "";
  mascotas: Mascota[] = [];
  isModoOscuro: boolean = true;

  @Output() actualizarLista = new EventEmitter<{nombre: string, filter: string}>();

  constructor(private router: Router) {}

  onSubmit(){
      // Buscar mascota por nombre
      this.actualizarLista.emit({
        nombre : this.nombrePerro,
        filter : this.filtroEstado
      });
  }

  crearMascota(){
    this.router.navigate(['/mascotas/registrar']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
