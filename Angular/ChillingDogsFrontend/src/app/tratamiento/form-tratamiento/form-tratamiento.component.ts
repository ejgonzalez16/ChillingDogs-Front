import { Component,Input } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import { MascotaService } from '../../service/mascota.service';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";
import { Droga } from '../../modelo/droga';
import { DrogaService } from '../../service/droga.service';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { TratamientoDTO } from '../../modelo/tratamientoDTO';
import {mergeMap} from "rxjs";

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

  constructor(
    private mascotaService: MascotaService,
    private authService: AuthService,
    private router: Router,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService) {}

  ngOnInit() {
    // Obtener id y la cédula del veterinario, y luego las drogas disponibles en un sólo suscribe usando pipe y mergeMap
    this.authService.userInfo$.pipe(
      mergeMap(usuario => {
        console.log('userInfo', usuario);
        this.veterinarioId = usuario.id;
        this.cedulaVeterinario = usuario.cedula;
        return this.drogaService.findDisponibles();
      }
    )).subscribe(drogas =>{
      this.drogas = drogas;
    });
  }

  registrarTratamiento(){
    console.log('mascota', this.mascota);
    if(this.droga == undefined){
      alert("seleccione una droga y una mascota antes de registrar")
      return;
    }
    this.tratamientoDto = {
      mascotaId: this.mascota.id,
      drogaId: this.droga.id,
      veterinarioId: this.veterinarioId
    };
    this.tratamientoService.add(this.tratamientoDto).subscribe(tratamiento => {
      alert("Tratamiento registrado con éxito");
      this.goToMisMascotas();
    });
  }

  goToMisMascotas(){
    // Navegar a mis-mascotas/:cedula del veterinario
    this.router.navigate(['mis-mascotas/'+this.cedulaVeterinario]);
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }
}
