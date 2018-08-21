import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {User} from '../_models/user.model';
import {text} from '@angular/core/src/render3/instructions';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  token: string;
  tokenSubscription: Subscription;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){

  }

  login(user: User, returnUrl: string){
    //let user = new User(username, password);
    let baseUrl = 'http://localhost:8080/auth';
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "text/plain"
      }),
      responseType: 'text' as 'text'
    };
    console.log(JSON.stringify(user));


    return this.http.post(baseUrl, user, httpOptions).subscribe(x => {
      console.log(x);
      this.token = x;
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('password', user.password);
      sessionStorage.setItem('token', this.token);
      this.router.navigate([returnUrl]);
    });
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
  }

  isAuthenticated() {
    return this.token != null;
  }

}
