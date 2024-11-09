import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-veterinario',
  templateUrl: './search-bar-veterinario.component.html',
  styleUrl: './search-bar-veterinario.component.scss'
})
export class SearchBarVeterinarioComponent {
  nombreOrCedula!: string;
  filtroEstado: string = "";

  @Output() actualizarLista = new EventEmitter<{nombreOrCedula: string, filter: string}>();

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.filtroEstado)
    // Buscar vet por cedula o nombre por nombre
    this.actualizarLista.emit({
      nombreOrCedula : this.nombreOrCedula,
      filter : this.filtroEstado
    });

    // if (this.cedulaVeterinario) {
    //   // Buscar cliente por cedula
    //   this.router.navigate(['/veterinarios/buscar', this.cedulaVeterinario]);
    // }
  }
}
