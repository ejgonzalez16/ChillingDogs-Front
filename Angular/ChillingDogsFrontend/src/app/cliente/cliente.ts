import { Mascota } from '../mascota/mascota';

export interface Cliente {
  id: number;
  cedula: string;
  nombre: string;
  correo: string;
  celular: string;
  foto: string;
  mascotas: Mascota[];
}
