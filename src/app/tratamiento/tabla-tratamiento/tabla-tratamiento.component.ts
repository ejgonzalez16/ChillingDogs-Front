import {Component, Input, ViewChild} from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { MascotaService } from '../../service/mascota.service';
import {Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";
import { SearchBarTratamientoComponent } from '../search-bar-tratamiento/search-bar-tratamiento.component';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-tabla-tratamiento',
  templateUrl: './tabla-tratamiento.component.html',
  styleUrl: './tabla-tratamiento.component.scss'
})
export class TablaTratamientoComponent {
  @Input()
  mascota!: Mascota;
  paginaActual: number = 1;
  filasPorPagina = [5, 10, 20, 50]
  itemsPorPagina = 10;

  mascotas!: Mascota[];
  vet: string = 'vet';
  veterinarioId!: number;
  isModoOscuro: boolean = true;
  @ViewChild(SearchBarTratamientoComponent) searchBar!: SearchBarTratamientoComponent

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {}

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
    this.lightModeService.registrarTablaTratamiento(this);
   if(!this.lightModeService.isModoOscuro){
     this.isModoOscuro = false;
   }
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

  cambiarModo(isModoOscuro: boolean) {  
    this.isModoOscuro = isModoOscuro;
    this.searchBar.cambiarModo(isModoOscuro);
  }
}
