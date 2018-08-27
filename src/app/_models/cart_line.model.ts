import {Product} from './product.model';

export class CartLineModel {
  constructor(public product: Product, public quantity: number){

  }

  getAmount() {
    console.log("get amount" + this.product.price * this.quantity);
    return (this.product.price * this.quantity);
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
