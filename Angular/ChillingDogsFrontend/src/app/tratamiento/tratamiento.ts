import { Mascota } from '../mascota/mascota';
import { Droga } from '../droga/droga';
import { Veterinario } from '../veterinario/veterinario';

export interface Tratamiento {
  id: number;
  fecha: Date;
  mascota: Mascota;
  droga: Droga;
  veterinario: Veterinario;
}
