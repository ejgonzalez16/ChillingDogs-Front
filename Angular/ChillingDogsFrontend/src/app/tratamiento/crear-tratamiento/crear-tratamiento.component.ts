import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrl: './crear-tratamiento.component.scss'
})
export class CrearTratamientoComponent {
  /*constructor(
    // private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    /!*this.authService.userInfo$.subscribe(userInfo => {
      console.log("crear-tratamiento")
      console.log(userInfo)
      if(userInfo.rol !== 'veterinario') {
        this.router.navigate(['/login']);
      }
      // this.veterinarioId = userInfo.id
      // this.cedulaVeterinario = userInfo.cedula
    });*!/
  }*/
}
