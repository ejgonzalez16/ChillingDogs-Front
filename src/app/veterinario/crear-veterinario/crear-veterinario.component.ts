import { Component } from '@angular/core';
import { Veterinario } from '../../modelo/veterinario';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrl: './crear-veterinario.component.scss'
})
export class CrearVeterinarioComponent {
    veterinario: Veterinario = {
    id: 0,
    cedula: "",
    contrasena: "",
    especialidad: "",
    numeroAtenciones: 0,
    nombre: "",
    estado: "",
    foto: "",
    tratamientos: []
  }
}
