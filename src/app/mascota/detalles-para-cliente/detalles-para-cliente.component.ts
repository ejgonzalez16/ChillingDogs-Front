import { Component, ViewChild } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { DetallesMascotaComponent } from '../detalles-mascota/detalles-mascota.component';
import { MascotaComponent } from '../../transversales/detalles/mascota/mascota.component';
import { isModuleNamespaceObject } from 'node:util/types';

@Component({
  selector: 'app-detalles-para-cliente',
  templateUrl: './detalles-para-cliente.component.html',
  styleUrl: './detalles-para-cliente.component.scss'
})
export class DetallesParaClienteComponent {
  id!: number
  mascota!: Mascota
  verTratamientos = false;
  isModoOscuro: boolean = true;
  @ViewChild(MascotaComponent) mascotaComponent!: MascotaComponent;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    this.lightModeService.registrarDetallesParaClienteMascota(this);
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
    });
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  goBack() {
    window.history.back();
  }
  
  // Función para agregar un parámetro a la URL
  addParamToUrl(url: string, param: string, value: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.set(param, value);
    return urlObj.toString();
  }
  

  cambiarModo(isModoOscuro: boolean){
    this.mascotaComponent.cambiarModo(isModoOscuro);
    this.isModoOscuro = isModoOscuro;
  }
}
