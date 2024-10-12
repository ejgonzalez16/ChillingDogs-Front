import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showHeaderFooter = true;
  title = 'ChillingDogsFrontend';
  tipoLogueo: string = "guest";

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Usar expresión regular para verificar si la ruta coincide con 'administrador/:cedula'
        const isAdminRoute = /^\/administrador\/\d+$/.test(event.urlAfterRedirects);
        this.showHeaderFooter = !isAdminRoute;
      }
    })
  }
}
