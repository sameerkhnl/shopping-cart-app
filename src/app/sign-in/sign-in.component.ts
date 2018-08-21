import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_services/AuthenticationService';
import {User} from '../_models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  returnUrl: string;

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    console.log(this.returnUrl);
  }
  onSubmit() {
    this.authService.login(new User(this.signInForm.value.username, this.signInForm.value.password), this.returnUrl);
  }
}
