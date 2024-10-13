import { Component, Input, OnDestroy } from '@angular/core';
import { MedicamentosMes } from '../../modelo/medicamentosMes';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnDestroy {
  @Input()
  nombreAdministrador!: string;
  totalTratamientos!: number;
  totalTratamientosMes!: number;
  medicamentosMes!: MedicamentosMes[];
  totalVetActivos!: number;
  totalVetInactivos!: number;
  totalMascotas!: number;
  totalMascotasTratamiento!: number;
  ventas!: number;
  ganancias!: number;
  topMedicamentos!: string[];
  private intervalId!: any;

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.obtenerDatosDashboard();
    });

    this.intervalId = setInterval(() => {
      this.obtenerDatosDashboard();
    }, 10000);
  }

  obtenerDatosDashboard(): void {
    const countTratamientos$ = this.dashboardService.countTratamientos();
    const countTratamientosMes$ = this.dashboardService.countTratamientosMes();
    const medicamentosMes$ = this.dashboardService.medicamentosMes();
    const countVetActivos$ = this.dashboardService.countVetActivos();
    const countVetInactivos$ = this.dashboardService.countVetInactivos();
    const countMascotas$ = this.dashboardService.countMascotas();
    const countMascotasTratamiento$ = this.dashboardService.countMascotasTratamiento();
    const ventas$ = this.dashboardService.ventas();
    const ganancia$ = this.dashboardService.ganancias();
    const topDrogas$ = this.dashboardService.topDrogas();

    forkJoin([
      countTratamientos$,
      countTratamientosMes$,
      medicamentosMes$,
      countVetActivos$,
      countVetInactivos$,
      countMascotas$,
      countMascotasTratamiento$,
      ventas$,
      ganancia$,
      topDrogas$
    ]).subscribe({
      next: (resultados) => {
        this.totalTratamientos = resultados[0];
        this.totalTratamientosMes = resultados[1];
        this.medicamentosMes = resultados[2];
        this.totalVetActivos = resultados[3];
        this.totalVetInactivos = resultados[4];
        this.totalMascotas = resultados[5];
        this.totalMascotasTratamiento = resultados[6];
        this.ventas = resultados[7];
        this.ganancias = resultados[8];
        this.topMedicamentos = resultados[9];
      },
      error: (error) => {
        console.error('Error al obtener los datos del dashboard', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
