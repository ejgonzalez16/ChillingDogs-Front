import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-search-bar-tratamiento',
  templateUrl: './search-bar-tratamiento.component.html',
  styleUrl: './search-bar-tratamiento.component.scss'
})
export class SearchBarTratamientoComponent {
  nombrePerro!: string;
  @Output() actualizarLista = new EventEmitter<string>();
  @Input()
  veterinarioId!: number;
  extras!: NavigationExtras;

  constructor(private router: Router,
  private authService: AuthService
) {}

  onSubmit() {
    if(this.nombrePerro){
      // Buscar mascota por nombre
      this.actualizarLista.emit(this.nombrePerro);
    }
  }

  goToMisMascotasVeterinario() {
    // Suscribirse al authService para obtener la cedula del usuario y redirigir a mis-mascotas/:cedula
    this.authService.userInfo$.subscribe(userInfo => {
      this.router.navigate(['/mis-mascotas', userInfo.cedula]);
    });
  }
}
