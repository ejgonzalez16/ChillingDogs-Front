import { Component, Input } from '@angular/core';
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';
import { mergeMap } from 'rxjs';
import { Router } from '@angular/router';
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
  styleUrl: './form-veterinario.component.scss'
})
export class FormVeterinarioComponent {
  @Input() modificar!: boolean;
  @Input() veterinario!: Veterinario;
  isModoOscuro: boolean = true;

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea admin
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  onSubmit() {
    if (this.modificar) {
      // Actualiza el cliente y vuelve a recargar la página con la información actualizada
      this.veterinarioService.update(this.veterinario).pipe(
        mergeMap(() => this.router.navigate(['/veterinarios/buscar']))
      ).subscribe(() => {
        alert("Registro modificado exitosamente.");
      }, error => {
        alert("Error al modificar el registro.");
      });
    } else {
      // Crea el cliente y vuelve a recargar la página con la información actualizada
      this.veterinarioService.add(this.veterinario).pipe(
        mergeMap(() => this.router.navigate(['/veterinarios/buscar']))
      ).subscribe(() => {
        alert("Registro creado exitosamente.");
      }, error => {
        alert("Error al crear el registro.");
      });
    }
  }


  selectButton(event: MouseEvent, color: string) {
    // Rellenar el botón para el formulario
    const button = event.currentTarget as HTMLElement;
    const input = document.getElementById('estado') as HTMLInputElement;
    if (input) {
        input.value = button.textContent || ''; // Asegúrate de que textContent no sea null
    }
    // Deseleccionar todos los botones
    const buttons = button.parentElement?.children;
    console.log(buttons);
    if (buttons) {
        // Recorrer los botones y cambiar su color
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i] as HTMLElement;
            btn.classList.remove("estadoActivo", "estadoInactivo");
            btn.classList.add("btn-grey");
        }

        // Seleccionar el botón elegido y cambiar su color
        if (color === "green") {
            button.classList.remove("btn-grey");
            button.classList.add("estadoActivo");
            this.veterinario.estado = "activo"
        } else if (color === "red") {
            button.classList.remove("btn-grey");
            button.classList.add("estadoInactivo");
            this.veterinario.estado = "inactivo"
        } else {
            button.classList.remove("btn-grey");
        }
    }
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
  }
}
