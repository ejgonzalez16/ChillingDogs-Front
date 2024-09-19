import { Cliente } from '../cliente/cliente';
import { Tratamiento } from '../tratamiento/tratamiento';

export interface Mascota {
  id: number;
  nombre: string;
  raza: string;
  edad: number;
  peso: number;
  enfermedad: string;
  foto: string;
  estado: string;
  cliente?: Cliente;
  tratamientos: Tratamiento[];
}
