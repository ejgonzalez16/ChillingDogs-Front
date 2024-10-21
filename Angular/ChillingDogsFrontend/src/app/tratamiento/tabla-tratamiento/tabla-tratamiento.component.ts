import {Component, Input} from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { MascotaService } from '../../service/mascota.service';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabla-tratamiento',
  templateUrl: './tabla-tratamiento.component.html',
  styleUrl: './tabla-tratamiento.component.scss'
})
export class TablaTratamientoComponent {
  @Input()
  mascota!: Mascota;

  mascotas!: Mascota[];
  vet: string = 'vet';
  veterinarioId!: number;

  constructor(
    private mascotaService: MascotaService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(usuario => {
      console.log('userInfo', usuario);
      this.veterinarioId = usuario.id;
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

  registrarTratamiento(mascota: Mascota) {
    if (mascota.estado === 'Activo'){
      this.router.navigate(['/tratamientos/registrar', mascota.id]);
    } else {
      alert('La mascota no está activa, no puede realizarle un tratamiento');
    }
  }
}
