import { Component, ViewChild } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { SearchBarDrogaComponent } from '../search-bar-droga/search-bar-droga.component';
import { DrogaService } from '../../service/droga.service';
import { Router } from '@angular/router';
import { PerfilService } from '../../service/perfil.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { forkJoin, from, map, mergeMap, switchMap, toArray } from 'rxjs';
import { TratamientoService } from '../../service/tratamiento.service';

@Component({
  selector: 'app-tabla-droga',
  templateUrl: './tabla-droga.component.html',
  styleUrl: './tabla-droga.component.scss'
})
export class TablaDrogaComponent {
  drogas!: Droga[];
  @ViewChild(SearchBarDrogaComponent) searchBar!: SearchBarDrogaComponent;
  isModoOscuro: boolean = true;
  paginaActual: number = 1;
  filasPorPagina = [5, 10, 20, 50]
  itemsPorPagina = 10;

  constructor(
    private drogaService: DrogaService,
    private tratamientosService: TratamientoService,
    private router: Router,
    private perfilService: PerfilService,
    private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de drogas y asignarla a la variable drogas
    // A través de un solo suscribe, utilizar pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.drogaService.findAll();
      })
    ).subscribe(drogas => {
      this.drogas = drogas;
    });
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  goBack() {
    window.history.back();
  }
  eliminarDroga(id: number) {
    this.drogaService.deleteById(id).subscribe(mensaje => {
      console.log(mensaje);
    })
    this.drogas.splice(this.drogas.findIndex(droga => droga.id === id), 1);
  }
  recargarDrogas(filtro: {nombre: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombre != undefined) {
      this.drogaService.findAll().subscribe(drogas => {
        this.drogas = drogas.filter(droga => droga.nombre.toLowerCase().includes(filtro.nombre.toLowerCase() || ''));
      });
    }
    else{
      this.drogaService.findAll().subscribe(drogas => {
        this.drogas = drogas
      });
    }
  }


}
