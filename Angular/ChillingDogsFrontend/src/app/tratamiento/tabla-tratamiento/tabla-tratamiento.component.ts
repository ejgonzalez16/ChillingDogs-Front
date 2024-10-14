import {Component, Input} from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {TratamientoService} from "../../service/tratamiento.service";
import {Tratamiento} from "../../modelo/tratamiento";

@Component({
  selector: 'app-tabla-tratamiento',
  templateUrl: './tabla-tratamiento.component.html',
  styleUrl: './tabla-tratamiento.component.scss'
})
export class TablaTratamientoComponent {
  @Input()
  mascota!: Mascota;
  tratamientos: Tratamiento[] = [];

  constructor(
    private tratamientoService: TratamientoService
  ) { }

  ngOnInit() {
    this.tratamientoService.findByMascotaId(this.mascota.id).subscribe(tratamientos => {
      this.tratamientos = tratamientos;
    });
  }
}
