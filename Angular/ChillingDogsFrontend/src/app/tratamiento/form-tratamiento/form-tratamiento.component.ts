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
import { Veterinario } from '../../modelo/veterinario';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrl: './form-tratamiento.component.scss'
})
export class FormTratamientoComponent {
  nombrePerro!: string;
  mascotas!: Mascota[];
  vet: string = 'vet';
  mascotaTratamiento!: Mascota;
  droga!: Droga;
  drogas!: Droga[];
  tratamientoDto!: TratamientoDTO;
  veterinarioId!: number;

  constructor(
    private mascotaService: MascotaService,
    private authService: AuthService,
    private router: Router,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
        this.veterinarioId = userInfo.id
      }
    });

    // Obtener todas las mascotas
    this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotas = mascotas;
      console.log(mascotas)
    });
  }

  recargarMascotas() {
    // Trae todas las mascotas de la BD
    if(this.nombrePerro != " ") {
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas.filter(mascota => mascota.nombre.includes(this.nombrePerro || ''));
      });
    }
    else{
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas
      });
    }
  }

  seleccionarMascota(mascota: Mascota){
    this.mascotaTratamiento = mascota
  }

  registrarTratamiento(){
    alert(this.veterinarioId)
    if(this.mascotaTratamiento == undefined || this.droga == undefined){
      alert("seleccione una droga y una mascota antes de registrar")
      return;
    }
    this.tratamientoDto = {
      mascotaId: this.mascotaTratamiento.id,
      drogaId: this.droga.id,
      veterinarioId: this.veterinarioId
    };
    this.tratamientoService.add(this.tratamientoDto);
    this.router.navigate(["tratamientos/buscar"])
  }
}
