import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { Router } from '@angular/router';
import { merge, mergeMap } from 'rxjs';
import { MascotaService } from '../../service/mascota.service';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrl: './detalles-cliente.component.scss'
})
export class DetallesClienteComponent {
  id!: number;
  cliente: Cliente | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clienteService: ClienteService,
              private mascotaService: MascotaService,
              private authService: AuthService) {}

  ngOnInit() {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.authService.userInfo$.subscribe(userInfo => {
      if(userInfo.rol !== 'veterinario' && userInfo.rol !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    // Obtener el id del cliente de la URL y buscarlo en la base de datos
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.clienteService.findByCedula(this.id).pipe(
        mergeMap(cliente => {
          this.cliente = cliente;
          return this.mascotaService.findByClienteCedula(this.id);
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
}
