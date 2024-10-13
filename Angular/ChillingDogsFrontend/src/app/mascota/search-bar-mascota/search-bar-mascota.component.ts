import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar-mascota',
  templateUrl: './search-bar-mascota.component.html',
  styleUrl: './search-bar-mascota.component.scss'
})
export class SearchBarMascotaComponent {
  nombrePerro!: string;

  @Output() actualizarLista = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSubmit(){
    if(this.nombrePerro){
      // Buscar mascota por nombre
      this.actualizarLista.emit(this.nombrePerro);
    }
  }

  crearMascota(){
    this.router.navigate(['/mascotas/registrar']);
  }
}
