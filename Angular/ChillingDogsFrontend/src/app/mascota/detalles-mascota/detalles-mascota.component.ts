import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrl: './detalles-mascota.component.scss'
})
export class DetallesMascotaComponent {
  id!: number
  mascota!: Mascota;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
    });
  }

  eliminarCliente(id: number) {
    this.mascotaService.deleteById(id);
    this.router.navigate(['/clientes/buscar']);
  }
}
