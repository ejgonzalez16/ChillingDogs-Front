import { Component, ViewChild } from '@angular/core';
import { Veterinario } from '../../modelo/veterinario';
import { ActivatedRoute } from '@angular/router';
import { merge, mergeMap } from 'rxjs';
import { VeterinarioService } from '../../service/veterinario.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { FormVeterinarioComponent } from '../form-veterinario/form-veterinario.component';

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrl: './modificar-veterinario.component.scss'
})
export class ModificarVeterinarioComponent {
  id!: number;
  veterinario!: Veterinario;
  isModoOscuro: boolean = true;
  @ViewChild(FormVeterinarioComponent) formVeterinarioComponent!: FormVeterinarioComponent

  constructor(private route: ActivatedRoute, private veterinarioService: VeterinarioService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(params => {
        // Trae el cliente a modificar
        this.id = +params.get('id')!;
        return this.veterinarioService.findByCedula(this.id.toString());
      })
    ).subscribe(veterinario => {
      this.veterinario = veterinario;
    });
    this.isModoOscuro = this.lightModeService.isModoOscuro;
    this.lightModeService.registrarModificarVeterinarioComponent(this);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.formVeterinarioComponent.cambiarModo(isModoOscuro);
  }
}
