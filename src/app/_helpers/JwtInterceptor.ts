import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("Jwt interceptor activated" + sessionStorage.getItem());
    let currentUser = sessionStorage.getItem('username');
    let token = sessionStorage.getItem('token');

    if(currentUser && token){
      console.log("inside jwt interceptor, adding bearer token");
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
      console.log(request.headers.get('Authorization'));
    }
    return next.handle(request);
  }

}
