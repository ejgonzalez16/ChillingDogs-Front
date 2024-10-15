import { Component } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import {AuthService} from "../../service/auth.service";
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';

@Component({
  selector: 'app-tabla-veterinario',
  templateUrl: './tabla-veterinario.component.html',
  styleUrl: './tabla-veterinario.component.scss'
})
export class TablaVeterinarioComponent {
  veterinarios!: Veterinario[];
  cedulaAdmin!: string;

  constructor(
    private veterinarioService: VeterinarioService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
      this.cedulaAdmin = userInfo.cedula;
    });

    // Obtener la lista de clientes
    this.route.paramMap.subscribe(params => {
      this.veterinarioService.findAll().subscribe(veterinarios => {
        this.veterinarios = veterinarios;
        console.log(veterinarios)
      })
    })
  }

  eliminarVeterinario(id: number) {
    console.log("matando a", id);
    this.veterinarioService.deleteById(id.toString()).pipe(
        mergeMap(response => {
            console.log(response); // Esto debería mostrar "Cliente eliminado exitosamente"
            return this.veterinarioService.findAll(); // Actualiza la lista de clientes
        })
    ).subscribe(
        veterinarios => {
            this.veterinarios = veterinarios; // Actualiza la vista con la lista de clientes
            console.log('Lista de clientes actualizada:', this.veterinarios);
        }
    );
}

  goToDashboard() {
    console.log("Redirigiendo al dashboard " + this.cedulaAdmin);
    // Redirigir al dashboard con el userInfo.cedula del administrador
    this.router.navigate(['/administrador', this.cedulaAdmin]);
  }
}
