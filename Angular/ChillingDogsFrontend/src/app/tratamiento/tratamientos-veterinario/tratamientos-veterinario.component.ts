import { Component } from '@angular/core';
import { Tratamiento } from '../../modelo/tratamiento';
import { TratamientoService } from '../../service/tratamiento.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamientos-veterinario',
  templateUrl: './tratamientos-veterinario.component.html',
  styleUrl: './tratamientos-veterinario.component.scss'
})
export class TratamientosVeterinarioComponent {
  tratamientos!: Tratamiento[]
  veterinarioId!: number;

  constructor(private tratamientoService: TratamientoService, private router: Router, private authService: AuthService){

  }

  ngOnInit(){
    this.authService.userInfo$.subscribe(userInfo => {
      this.veterinarioId = userInfo.id
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
      });
    this.tratamientoService.findAllVeterinario(this.veterinarioId).subscribe(tratamientos => {
      this.tratamientos = tratamientos
    })
  }

  eliminarTratamiento(id: number) {
    this.tratamientoService.deleteById(id);
    // Eliminar el tratamiento de la lista
    this.tratamientos.splice(this.tratamientos.findIndex(traatamiento => traatamiento.id === id), 1);
  }
}
