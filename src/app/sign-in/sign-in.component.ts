import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_services/AuthenticationService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signInForm.controls.username);
    console.log(this.signInForm.value);
    this.authService.login(this.signInForm.value.username, this.signInForm.value.password);
  }

}
