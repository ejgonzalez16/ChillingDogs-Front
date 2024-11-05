import { Component } from '@angular/core';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { Router } from '@angular/router';
import {switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'app-tratamientos-veterinario',
  templateUrl: './tratamientos-veterinario.component.html',
  styleUrl: './tratamientos-veterinario.component.scss'
})
export class TratamientosVeterinarioComponent {
  tratamientos!: Tratamiento[]
  veterinarioId!: number;

  constructor(
    private tratamientoService: TratamientoService,
    private router: Router,
    private perfilService: PerfilService){
  }

  ngOnInit(){
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de tratamientos del veterinario logueado
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO') {
          this.redirectNotAuthorized();
        }
        return this.tratamientoService.findAllByVeterinarioLogueado();
      })
    ).subscribe(tratamientos => {
      this.tratamientos = tratamientos
    });
  }

  eliminarTratamiento(id: number) {
    this.tratamientoService.deleteById(id);
    // Eliminar el tratamiento de la lista
    this.tratamientos.splice(this.tratamientos.findIndex(traatamiento => traatamiento.id === id), 1);
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
