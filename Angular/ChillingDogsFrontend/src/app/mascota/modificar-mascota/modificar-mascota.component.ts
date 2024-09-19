import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrl: './modificar-mascota.component.scss'
})
export class ModificarMascotaComponent {
  id!: number;
  mascota!: Mascota;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascota = this.mascotaService.findById(this.id);
  }
}
