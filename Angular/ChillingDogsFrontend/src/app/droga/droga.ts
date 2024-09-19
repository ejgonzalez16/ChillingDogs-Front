import { Tratamiento } from '../tratamiento/tratamiento';

export interface Droga {
  id: number;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  unidadesDisponibles: number;
  unidadesVendidas: number;
  tratamientos: Tratamiento[];
}
