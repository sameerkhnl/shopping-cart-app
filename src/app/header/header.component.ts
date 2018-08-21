import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/AuthenticationService';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLogin() {
    let navigationExtras: NavigationExtras = {

    }
    this.router.navigate(['/login'], navigationExtras);
  }

  onLogout() {
    let navigationExtras = {
      queryParams: {'logoutRedirectHome' :  'true'}
    }
    this.authService.logout();
    console.log(this.authService.isAuthenticated());
    this.router.navigate(['/home'], navigationExtras);
  }

}
