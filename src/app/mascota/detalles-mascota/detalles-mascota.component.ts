import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrl: './detalles-mascota.component.scss'
})
export class DetallesMascotaComponent {
  id!: number
  mascota!: Mascota;
  verTratamientos = false
  main!: HTMLElement | null;

  constructor(private route: ActivatedRoute,
              private mascotaService: MascotaService,
              private router: Router,
              private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Obtener el ID de la mascota
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes usar el ID para buscar detalles del cliente
    this.mascotaService.findById(this.id).subscribe(
      mascota => {
        this.mascota = mascota;
        console.log(this.mascota);
      },
      error => {
        console.log(error);
        // TODO: Redirigir a página de error de que no tiene permisos
        this.redirectNotAuthorized();
      });
    this.main = document.getElementById("class");
    this.route.queryParams.subscribe(params => {
    
      var isModoOscuro = params['isModoOscuro'] === 'true';
      if(!isModoOscuro && params['isModoOscuro']){
        this.main?.classList.replace("main-dark", "main-light");
      }
    });
    
  }

  eliminarCliente(id: number) {
    this.mascotaService.deleteById(id);
    var isModoOscuro = true;
    if(this.main?.classList.contains("main-light")) isModoOscuro = false;
    this.router.navigate(['/clientes/buscar'],  { queryParams: { isModoOscuro: isModoOscuro } });
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    alert("a")
    if(isModoOscuro){
      this.main?.classList.replace("main-light", "main-dark");
      return;
    }
    this.main?.classList.replace("main-dark", "main-light");
  }
}
