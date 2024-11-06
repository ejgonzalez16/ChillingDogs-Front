import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, switchMap, take} from "rxjs";
import {PerfilService} from "../service/perfil.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private perfilService: PerfilService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.perfilService.token$.pipe(
      take(1),  // Toma solo el valor actual del token y cierra la suscripción
      switchMap((token) => {
        // Si hay un token, clona la solicitud y agrega el encabezado de autorización
        if (token !== '') {
          const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(authReq);
        }

        return next.handle(request);
      })
    );
  }
}
