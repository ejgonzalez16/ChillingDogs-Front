import { Component, Input } from '@angular/core';
import { Administrador } from '../../modelo/administrador';
import { Tratamiento } from '../../modelo/tratamiento';
import { MedicamentosMes } from '../../modelo/medicamentosMes';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input()
  nombreAdministrador!: string;
  totalTratamientos!: number;
  tratamientosMes!: number;
  medicamentosMes!: MedicamentosMes[]
  totalVetActivos!: number;
  totalVetInactivos!: number;
  totalMascotas!: number;
  totalMascotasTratamiento!: number;
  ventas!: number;
  ganancias!: number;
  topMedicamentos!: string[];
}
