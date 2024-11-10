import { Component } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { ActivatedRoute, Router } from '@angular/router';
import { DrogaService } from '../../service/droga.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-detalles-droga',
  templateUrl: './detalles-droga.component.html',
  styleUrl: './detalles-droga.component.scss'
})
export class DetallesDrogaComponent {
  isModoOscuro: boolean = true;
  droga!: Droga;
  id!: number;

  constructor(private route: ActivatedRoute,private drogaService: DrogaService, private router: Router, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
  // Obtener el ID de la mascota
  this.id = +this.route.snapshot.paramMap.get('id')!;
  // Aquí puedes usar el ID para buscar detalles del cliente
  this.drogaService.findById(this.id).subscribe(
  droga => {
  this.droga = droga;
  },
  error => {
  console.log(error);
  // TODO: Redirigir a página de error de que no tiene permisos
  this.redirectNotAuthorized();
  });
  //this.lightModeService.registrarDetallesMascota(this);
  }

  goBack(){
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
