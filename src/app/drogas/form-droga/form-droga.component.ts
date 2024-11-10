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
      // Actualiza la mascota y muestra un alert solo si la actualización es exitosa
      this.drogaService.update(this.droga).subscribe(() => {
        alert('Droga modificada con éxito');
        this.router.navigate(['/drogas/buscar']);
      });
    } else {
      // Crea la mascota y muestra un alert solo si la creación es exitosa
      this.drogaService.add(this.droga).subscribe(() => {
        alert('Droga creada con éxito');
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
    this.isModoOscuro = this.lightModeService.isModoOscuro;
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }

  cambiarModo(isModoOscuro: boolean) {
    this.isModoOscuro = isModoOscuro;
  }

  goBack() {
    window.history.back();
  }
}
