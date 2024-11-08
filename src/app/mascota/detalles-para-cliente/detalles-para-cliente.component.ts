import { Component, ViewChild } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { DetallesMascotaComponent } from '../detalles-mascota/detalles-mascota.component';
import { MascotaComponent } from '../../transversales/detalles/mascota/mascota.component';

@Component({
  selector: 'app-detalles-para-cliente',
  templateUrl: './detalles-para-cliente.component.html',
  styleUrl: './detalles-para-cliente.component.scss'
})
export class DetallesParaClienteComponent {
  id!: number
  mascota!: Mascota
  verTratamientos = false
  main!: HTMLElement | null;
  btnTratamientos!: HTMLElement | null;
  btnVolver!: HTMLElement | null;
  @ViewChild(MascotaComponent) mascotaComponent!: MascotaComponent;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    this.lightModeService.registrarDetallesMascota(this);
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
    });
    this.main = document.getElementById("class");
    this.btnTratamientos = document.getElementById("btnTratamientos");
    this.btnVolver = document.getElementById("btnVolver");
  }

  ngAfterViewInit(){
    this.route.queryParams.subscribe(params => {
      var isModoOscuro = params['isModoOscuro'] === 'true';
      if(!isModoOscuro && params['isModoOscuro']){
        this.main?.classList.replace("main-dark", "main-light");
        this.btnTratamientos?.classList.replace("tratamientos-dark", "tratamientos-light");
        this.btnVolver?.classList.replace("btnVolver", "btnVolver-light")
      }
    });
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
    if(isModoOscuro){
      this.btnTratamientos?.classList.replace("tratamientos-light", "tratamientos-dark");
      this.btnVolver?.classList.replace("btnVolver-light", "btnVolver")
      return;
    }
    this.btnTratamientos?.classList.replace("tratamientos-dark", "tratamientos-light");
    this.btnVolver?.classList.replace("btnVolver", "btnVolver-light")
  }
}
