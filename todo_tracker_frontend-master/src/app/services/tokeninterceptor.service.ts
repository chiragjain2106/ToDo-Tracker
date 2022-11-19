import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    
    let newReq=request;
    let token=sessionStorage.getItem("token")
    if (token!=null) {
      newReq = request.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    }
    return next.handle(newReq);
  }
}