import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];
  vet: string = 'vet';

  constructor(
    private mascotaService: MascotaService, private authService: AuthService) {}

  ngOnInit() {
    // Cambiar el rol del usuario a veterinario y actualizar la información del usuario (para el header)
    // TODO: Actualizar la información del usuario cuando hayamos traído al veterinario
    this.authService.actualizarUserInfo('veterinario', 'Profesor Super O', '1234567890', 'https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/imagenes/banner2_4.png?VersionId=null');
    // Obtener todas las mascotas
    this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotas = mascotas;
      console.log(mascotas)
    });
  }

  recargarMascotas(nombrePerro?: string) {
    this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotas = mascotas.filter(mascota => mascota.nombre.includes(nombrePerro || ''));
    });
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    // Eliminar la mascota de la lista
    this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
  }
}
