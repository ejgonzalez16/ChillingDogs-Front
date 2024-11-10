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

  recargarMascotas(filtro: {nombre: string, filter: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombre != undefined) {
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas.filter(mascota => mascota.nombre.toLowerCase().includes(filtro.nombre.toLowerCase() || ''));
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

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.searchBar.cambiarModo(Boolean(isModoOscuro));
    this.isModoOscuro = isModoOscuro;
  }
}

