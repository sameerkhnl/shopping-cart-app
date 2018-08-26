import {Injectable, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OrderDetails} from '../_models/order_details.model';

@Injectable()
export class MessageService implements OnInit{
  createCustomerInfoComponent = false;
  itemAddedToCart = false;
  orderDetailsArray: OrderDetails[];

  ngOnInit() {

  }

}
