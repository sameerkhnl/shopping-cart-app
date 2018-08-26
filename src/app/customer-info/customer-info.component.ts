import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../_services/message.service';
import {OrderService} from '../_services/order.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
   phonePattern = '[+]{0,1}[0-9]{5,15}';

  customerInfoForm = new FormGroup({
    nameInput: new FormControl('', Validators.required),
    emailInput: new FormControl('', {validators: [Validators.required, Validators.email],updateOn: 'blur'}),
    phoneInput: new FormControl('', {validators: [Validators.required, Validators.pattern(this.phonePattern)], updateOn: 'blur'}),
    addressInput: new FormControl('', Validators.required)
  });


  constructor(private messageService: MessageService, private orderService: OrderService) { }

  ngOnInit() {
  }

  onSubmit() {

    //this.orderService.post
  }

}
