import { Component, ViewChild } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ActivatedRoute } from '@angular/router';
import {ClienteService} from "../../service/cliente.service";
import { merge, mergeMap } from 'rxjs';
import { MascotaService } from '../../service/mascota.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { FormClienteComponent } from '../form-cliente/form-cliente.component';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.scss'
})
export class ModificarClienteComponent {
  cedula!: string;
  cliente!: Cliente;
  isModoOscuro: boolean = true;
  @ViewChild(FormClienteComponent) formClienteComponent!: FormClienteComponent;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private mascotaService: MascotaService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(params => {
        // Trae el cliente a modificar
        this.cedula = params.get('cedula')!;
        return this.clienteService.findByCedula(this.cedula);
      })
    ).subscribe(cliente => {
      this.cliente = cliente;
    });
    this.lightModeService.registrarModificarClienteComponent(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
      this.formClienteComponent.cambiarModo(false);
    }
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.formClienteComponent.cambiarModo(isModoOscuro);
  }
}
