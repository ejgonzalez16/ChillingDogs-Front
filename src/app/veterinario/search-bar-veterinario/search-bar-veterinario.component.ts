import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-search-bar-veterinario',
  templateUrl: './search-bar-veterinario.component.html',
  styleUrl: './search-bar-veterinario.component.scss'
})
export class SearchBarVeterinarioComponent {
  nombreOrCedula!: string;
  filtroEstado: string = "";

  @Output() actualizarLista = new EventEmitter<{nombreOrCedula: string, filter: string}>();
  cedulaVeterinario!: number;
  isModoOscuro: boolean = true;

  constructor(private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

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

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
