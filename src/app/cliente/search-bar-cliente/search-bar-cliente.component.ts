import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-search-bar-cliente',
  templateUrl: './search-bar-cliente.component.html',
  styleUrl: './search-bar-cliente.component.scss'
})
export class SearchBarClienteComponent {
  cedulaCliente!: number;
  isModoOscuro: boolean = true;

  constructor(private router: Router,private lightModeService: LightModeServiceService) {}

  ngOnInit(){
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  onSubmit() {
    if (this.cedulaCliente) {
      // Buscar cliente por cedula
      this.router.navigate(['/clientes/buscar', this.cedulaCliente]);
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
