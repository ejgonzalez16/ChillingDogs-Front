import { Component } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';
import {PerfilService} from "../../service/perfil.service";

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
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService) {
  }

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de veterinarios
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.veterinarioService.findAll();
      })
    ).subscribe(veterinarios => {
      this.veterinarios = veterinarios;
    });
  }

  recargarVets(filtro: {nombreOrCedula: string, filter: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombreOrCedula != undefined) {
      //mirar si nombreOrCedula contiene numeros (cedula)
      if(filtro.nombreOrCedula.match(/^[0-9]+$/)) {
        this.veterinarioService.findAll().subscribe(veterinarios => {
          this.veterinarios = veterinarios.filter(veterinario => veterinario.cedula.toLowerCase().includes(filtro.nombreOrCedula.toLowerCase() || ''));
          if(filtro.filter != "") {
            this.filtrarVets(filtro.filter);
          }
        });
      }else{
        this.veterinarioService.findAll().subscribe(veterinarios => {
          this.veterinarios = veterinarios.filter(veterinario => veterinario.nombre.toLowerCase().includes(filtro.nombreOrCedula.toLowerCase() || ''));
          if(filtro.filter != "") {
            this.filtrarVets(filtro.filter);
          }
        });
      }
    }
    else{
      this.veterinarioService.findAll().subscribe(veterinarios => {
        this.veterinarios = veterinarios
        if(filtro.filter != "") {
          this.filtrarVets(filtro.filter);
        }
      });
    }
  }

  filtrarVets(filter: string): void {
    switch (filter) {
      case "Activo":
        this.veterinarios = this.veterinarios.filter(veterinario => veterinario.estado === "activo");
        break;
      case "Inactivo":
        this.veterinarios = this.veterinarios.filter(veterinario => veterinario.estado === "inactivo");
        break;
    }
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
    this.router.navigate(['/administrador']);
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}
