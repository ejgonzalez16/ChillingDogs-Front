import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-veterinario',
  templateUrl: './search-bar-veterinario.component.html',
  styleUrl: './search-bar-veterinario.component.scss'
})
export class SearchBarVeterinarioComponent {
  cedulaVeterinario!: number;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.cedulaVeterinario) {
      // Buscar cliente por cedula
      this.router.navigate(['/veterinarios/buscar', this.cedulaVeterinario]);
    }
  }
}
