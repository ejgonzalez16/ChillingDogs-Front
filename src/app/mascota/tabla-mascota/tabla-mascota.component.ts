import { Component, ViewChild } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import {Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";
import { SearchBarMascotaComponent } from '../search-bar-mascota/search-bar-mascota.component';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];
  @ViewChild(SearchBarMascotaComponent) searchBar!: SearchBarMascotaComponent;
  isModoOscuro: boolean = true;
  paginaActual: number = 1;
  filasPorPagina = [5, 10, 20, 50]
  itemsPorPagina = 10;

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private perfilService: PerfilService,
    private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de mascotas
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.mascotaService.findAll();
      })
    ).subscribe(mascotas => {
      this.mascotas = mascotas;
    });
    this.lightModeService.registrarTablaMascota(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  recargarMascotas(filtro: {nombre: string, filterEstado: string, filterBusqueda: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombre != undefined) {
      this.mascotaService.findAll().subscribe(mascotas => {
        if(filtro.filterBusqueda == "") {
          this.mascotas = mascotas.filter(mascota => mascota.nombre.toLowerCase().includes(filtro.nombre.toLowerCase() || ''));
        }else{
          this.mascotas = mascotas.filter(mascota => mascota.cliente?.nombre.toLowerCase().includes(filtro.nombre.toLowerCase() || ''));
        }    
        if(filtro.filterEstado != "") {
          this.filtrarMascotas(filtro.filterEstado);
        }
      });
    }
    else{
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas
        if(filtro.filterEstado != "") {
          this.filtrarMascotas(filtro.filterEstado);
        }
      });
    }
  }

  eliminarMascota(id: number) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
    if (confirmacion) {
      this.mascotaService.deleteById(id);
      alert("Mascota eliminada con éxito");
      // Eliminar la mascota de la lista
      this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
    } 
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

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.searchBar.cambiarModo(Boolean(isModoOscuro));
    this.isModoOscuro = isModoOscuro;
  }
}

