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

  recargarMascotas(nombrePerro?: string) {
    // Trae todas las mascotas de la BD
    if(nombrePerro != " ") {
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas.filter(mascota => mascota.nombre.includes(nombrePerro || ''));
      });
    }
    else{
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas
      });
    }
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    // Eliminar la mascota de la lista
    this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }
}
