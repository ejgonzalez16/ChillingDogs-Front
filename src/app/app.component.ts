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
  showHeaderFooter = true;
  title = 'ChillingDogsFrontend';
  tipoLogueo: string = "guest";
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  constructor(private router: Router, private lightModeService: LightModeServiceService) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        const isAdminRoute = /^\/administrador\/\d+$/.test(event.urlAfterRedirects);
        this.showHeaderFooter = !isAdminRoute;
      }
    })
  }

  cambiarModo(isModoOscuro: Boolean){
    this.header.cambiarModo(isModoOscuro);
    this.lightModeService.cambiarModoLogin(Boolean(isModoOscuro));
  }
}
