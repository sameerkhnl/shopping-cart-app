import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../_services/AuthenticationService';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrlL: state.url}});
    return false;
  }
}
