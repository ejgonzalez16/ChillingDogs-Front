import { Tratamiento } from './tratamiento';

export interface Veterinario {
  id: number;
  cedula: string;
  contrasena: string;
  especialidad: string;
  numeroAtenciones: number;
  nombre: string;
  estado: string;
  foto: string;
  tratamientos: Tratamiento[];
}
