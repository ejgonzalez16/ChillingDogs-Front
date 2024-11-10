import { Component, Input, OnDestroy } from '@angular/core';
import { MedicamentosMes } from '../../modelo/medicamentosMes';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { forkJoin, Subscription } from 'rxjs';
import { ScaleType } from '@swimlane/ngx-charts';
import { LightModeServiceService } from '../../service/light-mode-service.service';

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
  isModoOscuro: boolean = true;

  //GRAFICA
  dataMedicamentosMes!: ChartData[]
  dataVets!: ChartData[]
  dataMascotas!: ChartData[]
  dataTop!: ChartData[]
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
  xAxisLabelTop = 'Top medicamentos vendidos';
  showYAxisLabel = true;
  yAxisLabel = 'Unidades vendidas en el mes';
  yAxisLabelTop = 'Unidades vendidas';
  legendTitle = "Medicamentos";
  legendTitle2 = "Veterinarios";
  legendTitle3 = "Mascotas";
  //GRAFICA

  private intervalId!: any;

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService, private lightModeService: LightModeServiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.obtenerDatosDashboard();
    });
    // Actualizar la página cada 10 segundos
    this.intervalId = setInterval(() => {
      this.obtenerDatosDashboard();
    }, 10000);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
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
        this.totalTratamientos = <number>resultados[0];
        this.totalTratamientosMes = <number>resultados[1];
        this.medicamentosMes = <MedicamentosMes[]>resultados[2];
        this.dataMedicamentosMes =  transformarMedicamentos(<MedicamentosMes[]>resultados[2]);
        this.totalVetActivos = <number>resultados[3];
        this.totalVetInactivos = <number>resultados[4];
        this.dataVets = tranformarDataVets(<number>resultados[3], <number>resultados[4]);
        this.totalMascotas = <number>resultados[5];
        this.totalMascotasTratamiento = <number>resultados[6];
        this.dataMascotas = [
          {
            name: 'Mascotas en tratamiento',
            value: <number>resultados[6]
          },
          {
            name: 'Mascotas sin tratamiento actual',
            value: resultados[5] - resultados[6]
          }
        ]
        this.ventas = <number>resultados[7];
        this.ganancias = <number>resultados[8];
        this.dataTop = transformarMedicamentos(<MedicamentosMes[]>resultados[9]);
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

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    if(!isModoOscuro){
      this.colorScheme  = {
        name: 'customScheme',
        selectable: true,
        group: ScaleType.Ordinal,  // Usar la enumeración correcta
        domain: ['#212529', '#b2f0ff']
      };
      return;
    }
    this.colorScheme = {
      name: 'customScheme',
      selectable: true,
      group: ScaleType.Ordinal,  // Usar la enumeración correcta
      domain: ['#FFFFFF', '#b2f0ff']
    };
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
