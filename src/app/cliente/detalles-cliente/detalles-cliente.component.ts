import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';
import {catchError, merge, mergeMap} from 'rxjs';
import { MascotaService } from '../../service/mascota.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { SearchBarClienteComponent } from '../search-bar-cliente/search-bar-cliente.component';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.scss'
})
export class DetallesClienteComponent {
  cedula!: string;
  cliente: Cliente | undefined;
  isModoOscuro: boolean = true;
  @ViewChild(SearchBarClienteComponent) searchBarClienteComponent?: SearchBarClienteComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clienteService: ClienteService,
              private mascotaService: MascotaService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Obtener la cedula del cliente de la URL y buscarlo en la base de datos
    this.route.paramMap.subscribe(params => {
      this.cedula = params.get('cedula')!;
      this.clienteService.findByCedula(this.cedula).pipe(
        mergeMap(cliente => {
          this.cliente = cliente;
          return this.mascotaService.findByClienteCedula(this.cedula);
        }),
        catchError(error => {
          console.log(error);
          // TODO: Redirigir a página de error de que no tiene permisos
          this.redirectNotAuthorized();
          return [];
        })
      ).subscribe(mascotas => {
          if(this.cliente != undefined) {
            this.cliente.mascotas = mascotas;
          }
        }
      );
    })
    this.lightModeService.registrarDetallesClienteComponent(this);
    if(!this.lightModeService.isModoOscuro){
      this.isModoOscuro = false;
    }
  }

  // Función para eliminar un cliente de la BD
  eliminarCliente(id: number) {
    console.log(this.cliente)
    this.clienteService.deleteById(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/clientes/buscar']);
      }
    );
  }

  goBack() {
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean){
    this.isModoOscuro = isModoOscuro;
    this.searchBarClienteComponent?.cambiarModo(isModoOscuro);
  }
}
