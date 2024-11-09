import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-search-bar-veterinario',
  templateUrl: './search-bar-veterinario.component.html',
  styleUrl: './search-bar-veterinario.component.scss'
})
export class SearchBarVeterinarioComponent {
  cedulaVeterinario!: number;
  isModoOscuro: boolean = true;

  constructor(private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit() {
    if (this.cedulaVeterinario) {
      // Buscar cliente por cedula
      this.router.navigate(['/veterinarios/buscar', this.cedulaVeterinario]);
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
