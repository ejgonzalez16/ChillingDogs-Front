import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrl: './mis-mascotas.component.scss'
})
export class MisMascotasComponent {

  Clienteid!: number;
  mascotas!: Mascota[];

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService) {}
  ngOnInit(){
    this.Clienteid = +this.route.snapshot.paramMap.get('id')!;
    this.mascotas = this.mascotaService.findByClienteId(this.Clienteid);
  }
}
