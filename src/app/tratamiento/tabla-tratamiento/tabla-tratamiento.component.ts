import {Component, Input} from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { MascotaService } from '../../service/mascota.service';
import {Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";

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
    private router: Router,
    private perfilService: PerfilService) {}

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de mascotas
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO') {
          this.redirectNotAuthorized();
        }
        return this.mascotaService.findAll();
      })
    ).subscribe(mascotas => {
      this.mascotas = mascotas;
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

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
