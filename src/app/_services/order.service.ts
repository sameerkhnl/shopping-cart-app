import {Injectable} from '@angular/core';
import {Order} from '../_models/order.model';
import {CartModel} from '../_models/cart.model';

@Injectable()
export class OrderService {
  cartModel: CartModel[] = [];

  constructor(){
    this.cartModel.push(new CartModel());
  }

  getCurrentCart() {
    return this.cartModel[0];
  }

}
