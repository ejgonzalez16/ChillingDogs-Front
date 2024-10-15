import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { merge, mergeMap } from 'rxjs';
import {AuthService} from "../../service/auth.service";
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';

@Component({
  selector: 'app-detalles-veterinario',
  templateUrl: './detalles-veterinario.component.html',
  styleUrl: './detalles-veterinario.component.scss'
})
export class DetallesVeterinarioComponent {
  id!: number;
  veterinario: Veterinario | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private veterinarioService: VeterinarioService,
              private authService: AuthService) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    // Obtener el id del cliente de la URL y buscarlo en la base de datos
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.veterinarioService.findByCedula(this.id.toString()).
      subscribe(veterinario => {
        this.veterinario = veterinario;
        }
      );
    })
  }

  // Función para eliminar un cliente de la BD
  eliminarCliente(id: number) {
    console.log(this.veterinario)
    this.veterinarioService.deleteById(id.toString()).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/veterinarios/buscar']);
      }
    );
  }
}
