import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {catchError} from "rxjs";

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
              private router: Router) {}

  ngOnInit() {
    // Obtener el ID de la mascota
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(
      mascota => {
        this.mascota = mascota;
        console.log(this.mascota);
      },
      error => {
        console.log(error);
        // TODO: Redirigir a página de error de que no tiene permisos
        this.redirectNotAuthorized();
      });
  }

  eliminarCliente(id: number) {
    this.mascotaService.deleteById(id);
    this.router.navigate(['/clientes/buscar']);
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
