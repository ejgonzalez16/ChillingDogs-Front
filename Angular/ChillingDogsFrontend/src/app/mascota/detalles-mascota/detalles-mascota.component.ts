import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrl: './detalles-mascota.component.scss'
})
export class DetallesMascotaComponent {
  id!: number
  mascota!: Mascota;
  verTratamientos = false

  constructor(private route: ActivatedRoute,
              private mascotaService: MascotaService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    // Obtener el ID de la mascota
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(mascota => {
      this.mascota = mascota;
      console.log(this.mascota);
    });
  }

  eliminarCliente(id: number) {
    this.mascotaService.deleteById(id);
    this.router.navigate(['/clientes/buscar']);
  }
}
