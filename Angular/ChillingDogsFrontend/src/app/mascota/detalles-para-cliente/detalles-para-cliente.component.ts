import { Component } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-detalles-para-cliente',
  templateUrl: './detalles-para-cliente.component.html',
  styleUrl: './detalles-para-cliente.component.scss'
})
export class DetallesParaClienteComponent {
  id!: number
  mascota!: Mascota
  tipoLogueo = 'cliente';
  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
    });
  }
}
