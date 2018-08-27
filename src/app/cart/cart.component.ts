import { Component, OnInit } from '@angular/core';
import {CartLineModel} from '../_models/cart_line.model';
import {CartModel} from '../_models/cart.model';
import {OrderService} from '../_services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentCart: CartModel;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.currentCart = this.orderService.getCurrentCart();
    console.log(this.currentCart);
  }

}
