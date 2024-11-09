import { Component, ViewChild } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { FormClienteComponent } from '../form-cliente/form-cliente.component';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.scss'
})
export class RegistrarClienteComponent {
  cliente: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    foto: '',
    mascotas: []
  };
  isModoOscuro: boolean = true
  @ViewChild(FormClienteComponent) formClienteComponent!: FormClienteComponent;

  constructor(private lightModeService: LightModeServiceService){}

  ngOnInit(){
    this.lightModeService.registrarRegistrarClienteComponent(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
      this.formClienteComponent.cambiarModo(false);
    }
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.formClienteComponent.cambiarModo(isModoOscuro);
  }
}
