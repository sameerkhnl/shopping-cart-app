import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = JSON.parse(localStorage.getItem('token'));
    if(currentUser && token){
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }

}
