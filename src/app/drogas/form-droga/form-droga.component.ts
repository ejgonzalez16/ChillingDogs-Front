import { Component, Input } from '@angular/core';
import { Droga } from '../../modelo/droga';
import { DrogaService } from '../../service/droga.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from '../../service/perfil.service';
import { LightModeServiceService } from '../../service/light-mode-service.service';

@Component({
  selector: 'app-form-droga',
  templateUrl: './form-droga.component.html',
  styleUrl: './form-droga.component.scss'
})
export class FormDrogaComponent {
  @Input() modificar!: boolean
  @Input() droga!: Droga;
  isModoOscuro: boolean = true

  constructor(private drogaService: DrogaService, private router: Router, private route: ActivatedRoute, private perfilService: PerfilService,
    private lightModeService: LightModeServiceService) { }

  onSubmit() {
    if (this.modificar) {
      // Actualiza la mascota y vuelve a recargar la página con la información actualizada
      this.drogaService.update(this.droga).subscribe(() => {
        this.router.navigate(['/drogas/buscar']);
      });
    } else {
      // Crea la mascota y vuelve a recargar la página con la información actualizada
      this.drogaService.add(this.droga).subscribe(() => {
        this.router.navigate(['/drogas/buscar']);
      });
    }
  }

  ngOnInit() :void {
    // Verificar que el usuario esté logueado y sea veterinario o admin
    this.perfilService.perfilInfo$.subscribe(perfil => {
      if (perfil.rol !== 'ADMIN') {
        this.redirectNotAuthorized();
      }
    });
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
  }
}
