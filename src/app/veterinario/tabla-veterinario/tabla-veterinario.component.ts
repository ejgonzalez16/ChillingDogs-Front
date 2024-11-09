import { Component, ViewChild } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';
import {PerfilService} from "../../service/perfil.service";
import { SearchBarVeterinarioComponent } from '../search-bar-veterinario/search-bar-veterinario.component';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-tabla-veterinario',
  templateUrl: './tabla-veterinario.component.html',
  styleUrl: './tabla-veterinario.component.scss'
})
export class TablaVeterinarioComponent {
  veterinarios!: Veterinario[];
  cedulaAdmin!: string;
  isModoOscuro: boolean = true;
  @ViewChild(SearchBarVeterinarioComponent) searchBarVeterinarioComponent: SearchBarVeterinarioComponent | null = null;

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {
  }

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de veterinarios
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.veterinarioService.findAll();
      })
    ).subscribe(veterinarios => {
      this.veterinarios = veterinarios;
    });
    this.lightModeService.registrarTablaVeterinariosComponent(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  eliminarVeterinario(id: number) {
    console.log("matando a", id);
    this.veterinarioService.deleteById(id.toString()).pipe(
        mergeMap(response => {
            console.log(response); // Esto debería mostrar "Cliente eliminado exitosamente"
            return this.veterinarioService.findAll(); // Actualiza la lista de clientes
        })
    ).subscribe(
        veterinarios => {
            this.veterinarios = veterinarios; // Actualiza la vista con la lista de clientes
            console.log('Lista de clientes actualizada:', this.veterinarios);
        }
    );
}

  goToDashboard() {
    console.log("Redirigiendo al dashboard " + this.cedulaAdmin);
    // Redirigir al dashboard con el userInfo.cedula del administrador
    this.router.navigate(['/administrador']);
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) { 
    this.isModoOscuro = isModoOscuro;
    this.searchBarVeterinarioComponent?.cambiarModo(isModoOscuro);
  }
}
