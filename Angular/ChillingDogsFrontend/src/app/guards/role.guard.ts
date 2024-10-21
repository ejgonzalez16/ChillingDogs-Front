import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from "../service/auth.service";


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const allowedRoles = route.data['allowedRoles'] as Array<string>;  // Obtener la lista de roles permitidos
    const currentRole = this.authService.getUsuarioRole();  // Obtener el rol actual

    // Imprimir la ruta en la que se está intentando acceder, validando que routeConfig no sea null
    if (route.routeConfig !== null) {
      console.log('En RoleGuard', route.routeConfig.path);
    }

    if (currentRole !== 'guest') {
      if (allowedRoles.includes(currentRole)) {
        return true;  // Permitir acceso si el rol actual está en la lista de roles permitidos
      }
    }
    // Redirigir si no tiene el rol adecuado o no está autenticado
    // Ir a la pantalla anterior con window.history.back() o al login con this.router.navigate(['/login'])
    console.log('En RoleGuard', currentRole, allowedRoles);
    this.router.navigate(['/login']);
    return false;
  }
}
