import {Product} from './product.model';

export class CartLineModel {
  constructor(public product: Product, public quantity: number){

  }

  getAmount() {
    return this.product.price * this.quantity;
  }

  incrementQuantityByOne() {
    this.quantity++;
  }

  decreaseQuantityByOne() {
    if(this.quantity > 1){
      this.quantity--;
    }
  }
}
