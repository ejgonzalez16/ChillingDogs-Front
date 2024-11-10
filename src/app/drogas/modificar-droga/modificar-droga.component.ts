import { Component } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { ActivatedRoute } from '@angular/router';
import { DrogaService } from '../../service/droga.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-modificar-droga',
  templateUrl: './modificar-droga.component.html',
  styleUrl: './modificar-droga.component.scss'
})
export class ModificarDrogaComponent {
  isModoOscuro: boolean = true;
  droga!:Droga;
  id!: number;

  constructor(private route: ActivatedRoute, private drogaService: DrogaService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Trae la mascota que se va a actualizar
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.drogaService.findById(this.id).subscribe(droga => {
      this.droga = droga;
    });
    // this.lightModeService.registrarModificarMascota(this);
    // if(!this.lightModeService.isModoOscuro){  
    //   this.isModoOscuro = false;
    // }
  }
}
