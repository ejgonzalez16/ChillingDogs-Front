import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Veterinario } from '../../modelo/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';
import { SearchBarVeterinarioComponent } from '../search-bar-veterinario/search-bar-veterinario.component';

@Component({
  selector: 'app-detalles-veterinario',
  templateUrl: './detalles-veterinario.component.html',
  styleUrl: './detalles-veterinario.component.scss'
})
export class DetallesVeterinarioComponent {
  id!: number;
  veterinario: Veterinario | undefined;
  isModoOscuro: boolean = true;
  @ViewChild(SearchBarVeterinarioComponent) searchBarVeterinarioComponent?: SearchBarVeterinarioComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private veterinarioService: VeterinarioService, private lightModeService: LightModeServiceService) {}

  ngOnInit() {
    // Obtener el id del cliente de la URL y buscarlo en la base de datos
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.veterinarioService.findByCedula(this.id.toString()).
      subscribe(veterinario => {
        this.veterinario = veterinario;
        },
        error => {
          console.log(error);
          // TODO: Redirigir a página de error de que no tiene permisos
          this.redirectNotAuthorized();
        }
      );
    })
    this.lightModeService.registrarDetallesVeterinario(this);
    this.isModoOscuro = this.lightModeService.isModoOscuro;
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

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
    this.searchBarVeterinarioComponent?.cambiarModo(isModoOscuro);
  }
}
