import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obter o token do AuthService
    return from(this.authService.getToken()).pipe(
      switchMap(token => {
        if (token) {
          // Clonar a requisição e adicionar o cabeçalho Authorization com o token
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }
        // Passar a requisição modificada para o próximo manipulador
        return next.handle(request);
      })
    );
  }
}