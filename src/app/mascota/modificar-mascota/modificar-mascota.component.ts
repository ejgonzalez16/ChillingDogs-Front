import { Component, ViewChild } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { FormMascotaComponent } from '../form-mascota/form-mascota.component';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrl: './modificar-mascota.component.scss'
})
export class ModificarMascotaComponent {
  id!: number;
  mascota!: Mascota;
  isModoOscuro: boolean = true;
  @ViewChild(FormMascotaComponent) formMascota!: FormMascotaComponent

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Trae la mascota que se va a actualizar
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
    });
    this.lightModeService.registrarModificarMascota(this);
    if(!this.lightModeService.isModoOscuro){  
      this.isModoOscuro = false;
    }
  }
  
  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.formMascota.cambiarModo(isModoOscuro);
  }
}
