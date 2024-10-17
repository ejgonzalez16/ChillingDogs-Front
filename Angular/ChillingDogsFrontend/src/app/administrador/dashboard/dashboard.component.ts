import { Component, Input, OnDestroy } from '@angular/core';
import { MedicamentosMes } from '../../modelo/medicamentosMes';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { forkJoin, Subscription } from 'rxjs';
import { ScaleType } from '@swimlane/ngx-charts';

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

  //GRAFICA
  dataMedicamentosMes!: ChartData[]
  dataVets!: ChartData[]
  dataMascotas!: ChartData[]
  view:[number, number] = [700, 400];
  colorScheme = {
    name: 'customScheme',   
    selectable: true,       
    group: ScaleType.Ordinal,  // Usar la enumeración correcta
    domain: ['#FFFFFF', '#b2f0ff']
  };
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Medicamentos vendidos en el mes';
  showYAxisLabel = true;
  yAxisLabel = 'Unidades vendidas en el mes';
  legendTitle = "Medicamentos";
  //GRAFICA

  private intervalId!: any;

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.obtenerDatosDashboard();
    });
    // Actualizar la página cada 10 segundos
    this.intervalId = setInterval(() => {
      this.obtenerDatosDashboard();
    }, 10000);
  }

  // Obtener los datos del dashboard de manera paralela
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
        this.dataMedicamentosMes =  transformarMedicamentos(resultados[2]);
        this.totalVetActivos = resultados[3];
        this.totalVetInactivos = resultados[4];
        this.dataVets = tranformarDataVets(resultados[3], resultados[4]);
        this.totalMascotas = resultados[5];
        this.totalMascotasTratamiento = resultados[6];
        this.dataMascotas = [
          {
            name: 'Mascotas en tratamiento',
            value: resultados[6]
          },
          {
            name: 'Mascotas sin tratamiento actual',
            value: resultados[5] - resultados[6]
          }
        ]
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
      // Detener el intervalo
      clearInterval(this.intervalId);
    }
  }
}

export interface ChartData {
  name: string;
  value: number;
}
function transformarMedicamentos(medicamentosMes: MedicamentosMes[]): ChartData[] {
  return medicamentosMes.map(m => ({
    name: m.medicamento,
    value: m.cantidad
  }));
}

function tranformarDataVets(activos: number, inactivos: number): ChartData[] {
  return [
    {
      name: 'Activos',
      value: activos
    },
    {
      name: 'Inactivos',
      value: inactivos
    }
  ];
}

