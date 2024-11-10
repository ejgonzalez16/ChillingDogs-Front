import { Component, ViewChild } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { SearchBarDrogaComponent } from '../search-bar-droga/search-bar-droga.component';
import { DrogaService } from '../../service/droga.service';
import { Router } from '@angular/router';
import { PerfilService } from '../../service/perfil.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { switchMap } from 'rxjs';

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

  constructor(
    private drogaService: DrogaService,
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
      })
    ).subscribe(drogas => {
      this.drogas = drogas;
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
  eliminarDroga(arg0: number) {
  throw new Error('Method not implemented.');
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
