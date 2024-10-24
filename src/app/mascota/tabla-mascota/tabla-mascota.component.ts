import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];
  vet: string = 'vet';

  constructor(
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

    // Obtener todas las mascotas
    this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotas = mascotas;
      console.log(mascotas)
    });
  }

  recargarMascotas(filtro: {nombre: string, filter: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombre != undefined) {
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas.filter(mascota => mascota.nombre.includes(filtro.nombre || ''));
        if(filtro.filter != "") {
          this.filtrarMascotas(filtro.filter);
        }
      });
    }
    else{
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas
        if(filtro.filter != "") {
          this.filtrarMascotas(filtro.filter);
        }
      });
    }
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    // Eliminar la mascota de la lista
    this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
  }

  filtrarMascotas(filter: string): void {
    switch (filter) {
      case "Activo":
        this.mascotas = this.mascotas.filter(mascota => mascota.estado === "Activo");
        break;
      case "Inactivo":
        this.mascotas = this.mascotas.filter(mascota => mascota.estado === "Inactivo");
        break;
    }
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }
}

