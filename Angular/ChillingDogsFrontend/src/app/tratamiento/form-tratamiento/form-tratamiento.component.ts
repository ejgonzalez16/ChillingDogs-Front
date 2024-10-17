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
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrl: './form-tratamiento.component.scss'
})
export class FormTratamientoComponent {
  /*nombrePerro!: string;
  mascotas!: Mascota[];
  vet: string = 'vet';
  mascotaTratamiento!: Mascota;
  droga!: Droga;
  drogas!: Droga[];
  tratamientoDto!: TratamientoDTO;
  veterinarioId!: number;
  cedulaVeterinario!: string;

  constructor(
    private mascotaService: MascotaService,
    // private authService: AuthService,
    private router: Router,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    /!*!// Hacer la suscripción al observable userInfo$ del servicio AuthService con mergeMap a mascotaService.findAll()
    this.authService.userInfo$.pipe(
      mergeMap(userInfo => {
        console.log(userInfo)
        if(userInfo.rol !== 'veterinario') {
          this.router.navigate(['/login']);
        }
        this.veterinarioId = userInfo.id
        this.cedulaVeterinario = userInfo.cedula
        return this.mascotaService.findAll();
      }
    )).subscribe(mascotas => {
      this.mascotas = mascotas;
      console.log(mascotas)
    });*!/
    /!*this.authService.userInfo$.subscribe(userInfo => {
      console.log(userInfo)
      if(userInfo.rol !== 'veterinario') {
        this.router.navigate(['/login']);
      }
      this.veterinarioId = userInfo.id
      this.cedulaVeterinario = userInfo.cedula
    });

    *!/
   this.veterinarioId = 1;
    // Obtener todas las mascotas

    /!*this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotas = mascotas;
      console.log(mascotas)
    });*!/
    this.drogaService.findAll().subscribe(drogas =>{
      this.drogas = drogas;
    })
  }

  recargarMascotas() {
    // Trae todas las mascotas de la BD
    if(this.nombrePerro != "") {
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
    this.goToMisMascotas()
  }

  goToMisMascotas(){
    // Navegar a mis-mascotas/:cedula del veterinario
    this.router.navigate(['veterinarios/mis-mascotas/'+this.cedulaVeterinario]);
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }*/
}
