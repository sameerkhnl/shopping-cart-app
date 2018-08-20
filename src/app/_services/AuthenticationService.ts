import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../_models/user.model';

@Injectable()
export class AuthenticationService {
  token: String;

  constructor(private http: HttpClient){

  }

  login(username: string, password: string){
    let user = new User(username, password);
    let baseUrl = 'http://localhost:8080/auth';
    let subscription = this.http.post<any>(baseUrl, user).subscribe(token => {
      this.token = token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("currentUser", JSON.stringify(user));
      return user;
    }, error => console.log("error while authenticating with the server"));
  }

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return this.token != null;
  }
}
