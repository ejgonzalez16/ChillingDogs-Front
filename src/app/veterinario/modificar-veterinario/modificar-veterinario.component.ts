import { Component } from '@angular/core';
import { Veterinario } from '../../modelo/veterinario';
import { ActivatedRoute } from '@angular/router';
import { merge, mergeMap } from 'rxjs';
import { VeterinarioService } from '../../service/veterinario.service';

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrl: './modificar-veterinario.component.scss'
})
export class ModificarVeterinarioComponent {
  id!: number;
  veterinario!: Veterinario;

  constructor(private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}

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
  }
}
