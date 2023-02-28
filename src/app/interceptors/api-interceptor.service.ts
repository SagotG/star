import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  /// @TODO : Can be improved by something better ie: env
  private baseUrl = 'https://swapi.dev/api';
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const apiReq = request.clone({
      url: `${this.baseUrl}${request.url}`,
      headers,
    });
    return next.handle(apiReq);
  }
}
