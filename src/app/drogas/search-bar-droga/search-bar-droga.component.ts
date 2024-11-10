import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-search-bar-droga',
  templateUrl: './search-bar-droga.component.html',
  styleUrl: './search-bar-droga.component.scss'
})
export class SearchBarDrogaComponent {
  isModoOscuro: boolean = true;
  nombre!:string
  @Output() actualizarLista = new EventEmitter<{nombre: string}>();

  constructor(private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit(){
    // Buscar droga por nombre
    this.actualizarLista.emit({
      nombre : this.nombre,
    });
  }

  crearDroga() {
    this.router.navigate(['/drogas/crear']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
