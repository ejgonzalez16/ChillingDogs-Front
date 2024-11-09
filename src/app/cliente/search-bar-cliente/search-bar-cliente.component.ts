import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-search-bar-cliente',
  templateUrl: './search-bar-cliente.component.html',
  styleUrl: './search-bar-cliente.component.scss'
})
export class SearchBarClienteComponent {
  nombreOCedula!: string;
  isModoOscuro: boolean = true;

  @Output() actualizarLista = new EventEmitter<{nombreOCedula: string}>();

  constructor(private router: Router,private lightModeService: LightModeServiceService) {}

  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit() {
    // Buscar cliente por nombre o cedula
    this.actualizarLista.emit({
      nombreOCedula : this.nombreOCedula,
    });
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
