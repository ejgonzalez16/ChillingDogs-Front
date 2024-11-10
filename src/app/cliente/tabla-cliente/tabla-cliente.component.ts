import { Component, ViewChild } from '@angular/core';
import {Cliente} from "../../modelo/cliente";
import {ClienteService} from "../../service/cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import {mergeMap, of, switchMap} from 'rxjs';
import {PerfilService} from "../../service/perfil.service";
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { SearchBarClienteComponent } from '../search-bar-cliente/search-bar-cliente.component';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.scss'
})
export class TablaClienteComponent {
  clientes!: Cliente[];
  isModoOscuro: boolean = true;
  paginaActual: number = 1;
  @ViewChild(SearchBarClienteComponent) searchBar!: SearchBarClienteComponent
  filasPorPagina = [5, 10, 20, 50]
  itemsPorPagina = 10;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService, private lightModeService: LightModeServiceService) {
  }

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de clientes

    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
        switchMap(perfil => {
            if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
              this.redirectNotAuthorized();
              return of([]);
            } else {
              return this.clienteService.findAll();
            }
        })
    ).subscribe(clientes => {
        this.clientes = clientes;
    },
      error => {
        console.error('Error al obtener la lista de clientes:', error);
      }
    );

    /*// Obtener la lista de clientes
    this.route.paramMap.subscribe(params => {
      this.clienteService.findAll().subscribe(clientes => {
        this.clientes = clientes;
      })
    })*/
   this.lightModeService.registrarTablaCliente(this);
   if(!this.lightModeService.isModoOscuro){
     this.isModoOscuro = false;
   }
  }

  eliminarCliente(id: number) {
    console.log("matando a", id);
    this.clienteService.deleteById(id).pipe(
        mergeMap(response => {
            console.log(response); // Esto debería mostrar "Cliente eliminado exitosamente"
            return this.clienteService.findAll(); // Actualiza la lista de clientes
        })
    ).subscribe(
        clientes => {
            this.clientes = clientes; // Actualiza la vista con la lista de clientes
            console.log('Lista de clientes actualizada:', this.clientes);
        }
    );
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) {  
    this.isModoOscuro = isModoOscuro;
    this.searchBar.cambiarModo(isModoOscuro);
  }

  recargarClientes(filtro: {nombreOCedula: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombreOCedula != undefined) {
      this.clienteService.findAll().subscribe(clientes => {
        if(filtro.nombreOCedula.match(/^[0-9]+$/)) {
          this.clientes = clientes.filter(clientes => clientes.cedula.toLowerCase().includes(filtro.nombreOCedula.toLowerCase() || ''));
        }else{
          this.clientes = clientes.filter(clientes => clientes.nombre.toLowerCase().includes(filtro.nombreOCedula.toLowerCase() || ''));
        }   
      });
    }
    else{
      this.clienteService.findAll().subscribe(clientes => {
        this.clientes = clientes;
      });
    }
  }
}
