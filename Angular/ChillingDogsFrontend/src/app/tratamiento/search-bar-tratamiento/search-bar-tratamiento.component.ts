import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-tratamiento',
  templateUrl: './search-bar-tratamiento.component.html',
  styleUrl: './search-bar-tratamiento.component.scss'
})
export class SearchBarTratamientoComponent {
  nombrePerro!: string;
  @Output() actualizarLista = new EventEmitter<string>();
  @Input()
  veterinarioId!: number;
  extras!: NavigationExtras;

  constructor(private router: Router) {}

  onSubmit() {
    if(this.nombrePerro){
      // Buscar mascota por nombre
      this.actualizarLista.emit(this.nombrePerro);
    }
  }
}
