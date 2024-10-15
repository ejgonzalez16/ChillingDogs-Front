import { Component } from '@angular/core';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelo/mascota';

@Component({
  selector: 'app-tratamientos-mascota',
  templateUrl: './tratamientos-mascota.component.html',
  styleUrl: './tratamientos-mascota.component.scss'
})
export class TratamientosMascotaComponent {
  tratamientos!: Tratamiento[]
  id!: number
  mascota!: Mascota

  constructor(private tratamientoService: TratamientoService,private route: ActivatedRoute, private authService: AuthService, private router: Router,
    private mascotaService: MascotaService
  ){}

  ngOnInit(){
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
    if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
      this.router.navigate(['/login']);
    }
    });
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.tratamientoService.findAllMascota(this.id).subscribe(tratamientos =>{
      this.tratamientos = tratamientos
    });

    this.mascotaService.findById(this.id).subscribe(mascota =>{
      this.mascota = mascota
    })
  }
}
