import { Mascota } from './mascota';
import { Droga } from './droga';
import { Veterinario } from './veterinario';

export interface Tratamiento {
  id: number;
  fecha: Date;
  mascota: Mascota;
  droga: Droga;
  veterinario: Veterinario;
}
