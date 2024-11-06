import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';
import {catchError, merge, mergeMap} from 'rxjs';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.scss'
})
export class DetallesClienteComponent {
  cedula!: string;
  cliente: Cliente | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clienteService: ClienteService,
              private mascotaService: MascotaService) {}

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
}
