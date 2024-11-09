import { Component, ViewChild } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { MascotaComponent } from '../../transversales/detalles/mascota/mascota.component';
import { ClienteComponent } from '../../transversales/detalles/cliente/cliente.component';

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrl: './detalles-mascota.component.scss'
})
export class DetallesMascotaComponent {
  id!: number
  mascota!: Mascota;
  verTratamientos = false
  main!: HTMLElement | null;
  @ViewChild(MascotaComponent) mascotaComponent!: MascotaComponent;
  @ViewChild(ClienteComponent) clienteComponent!: ClienteComponent;


  constructor(private route: ActivatedRoute,
              private mascotaService: MascotaService,
              private router: Router, private lightModeService: LightModeServiceService) {}

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
    this.lightModeService.registrarDetallesMascota(this);
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

  cambiarModo(isModoOscuro: boolean){
    this.mascotaComponent.cambiarModo(isModoOscuro);
    this.clienteComponent.cambiarModo(isModoOscuro);
  }
}
