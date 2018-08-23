import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customerInfoForm = new FormGroup({
    nameInput: new FormControl('', Validators.required),
    emailInput: new FormControl('', {validators: [Validators.required, Validators.email],updateOn: 'blur'}),
    phoneInput: new FormControl('', Validators.required),
    addressInput: new FormControl('', Validators.required)
  });


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
