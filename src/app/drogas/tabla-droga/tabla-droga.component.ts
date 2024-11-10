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
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de mascotas
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.drogaService.findAll();
      }),
      switchMap(drogas => {
        this.drogas = drogas;
        // Usa `from` para crear un flujo de drogas y `mergeMap` para hacer la consulta de conteo por cada droga
        return from(drogas).pipe(
          mergeMap(droga =>
            this.tratamientosService.countDrogasVendidas(droga.id).pipe(
              map(count => {
                console.log(droga)
                console.log(count);
                droga.unidadesVendidas = count; // Agrega el resultado al objeto de droga
                return droga;
              })
            )
          ),
          toArray() // Convierte el flujo de drogas con conteo en un array
        );
      })
    ).subscribe(drogasConConteo => {
      this.drogas = drogasConConteo; // Asigna el array con los conteos a `this.drogas`
    });
    // this.lightModeService.registrarTablaDrogas(this);
    // if(!this.lightModeService.isModoOscuro){
    //   this.isModoOscuro = false;
    // }
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
