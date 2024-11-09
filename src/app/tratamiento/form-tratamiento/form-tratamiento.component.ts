import { Component,Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { MascotaService } from '../../service/mascota.service';
import {Router} from "@angular/router";
import { Droga } from '../../modelo/droga';
import { DrogaService } from '../../service/droga.service';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { TratamientoDTO } from '../../modelo/tratamientoDTO';
import {mergeMap, switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrl: './form-tratamiento.component.scss'
})
export class FormTratamientoComponent {
  @Input()
  mascota!: Mascota;
  droga!: Droga;
  drogas!: Droga[];
  tratamientoDto!: TratamientoDTO;
  veterinarioId!: number;
  cedulaVeterinario!: string;
  isModoOscuro: boolean = true;

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de drogas disponibles
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO') {
          this.redirectNotAuthorized();
        }
        return this.drogaService.findDisponibles();
      })
    ).subscribe(drogas =>{
      this.drogas = drogas;
    });
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  registrarTratamiento(){
    console.log('mascota', this.mascota);
    if(this.droga == undefined){
      alert("seleccione una droga y una mascota antes de registrar")
      return;
    }
    this.tratamientoDto = {
      mascotaId: this.mascota.id,
      drogaId: this.droga.id
    };
    this.tratamientoService.add(this.tratamientoDto).subscribe(tratamiento => {
      alert("Tratamiento registrado con éxito");
      this.goToMisMascotas();
    });
  }

  goToMisMascotas(){
    // Navegar a mis-mascotas/:cedula del veterinario
    this.router.navigate(['mis-mascotas']);
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
  
  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
  }
}
