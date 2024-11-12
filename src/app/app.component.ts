import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/main/login.component';
import { LightModeServiceService } from './service/light-mode-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showFooter = true;
  title = 'ChillingDogsFrontend';
  tipoLogueo: string = "GUEST";
  @ViewChild(HeaderComponent) header!: HeaderComponent;
  isModoOscuro: boolean = true;


  constructor(private router: Router, private lightModeService: LightModeServiceService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        // Definir isAdminRoute como verdadero si la ruta actual es '/administrador'
        // const isAdminRoute = event.urlAfterRedirects.includes('/administrador');
        // console.log('isAdminRoute:', isAdminRoute);
        // this.showFooter = !isAdminRoute;
      }
    })
  }

  cambiarModo(isModoOscuro: Boolean){
    this.isModoOscuro = Boolean(isModoOscuro);
    this.header.cambiarModo(isModoOscuro);
    this.lightModeService.cambiarModo(Boolean(isModoOscuro));
  }
}
