import {CartLineModel} from './cart_line.model';
import {CustomerInfo} from './customer_info.model';
import {Product} from './product.model';

export class CartModel {
  cartLine: CartLineModel[] = [];
  orderNum: number;
  customerInfo: CustomerInfo;

  addItemToCart(product: Product, quantity: number){
    if(this.findItemInCart(product) > 0){
      // this.cartLine[this.findItemInCart(product)] = new CartLineModel(product, quantity);
      for(let i = 0; i < quantity; i++){
        this.cartLine[this.findItemInCart(product)].incrementQuantityByOne();
      }
    } else {
      this.cartLine.push(new CartLineModel(product, 1));
    }
  }


  findItemInCart(product: Product){
    let code = product.code;
    let codeArray: String[] = [];
    if(this.cartLine.length < 1){
      console.log("cart is currently empty");
      return -1;
    }

    this.cartLine.map(x =>
      codeArray.push(x.product.code)

    );
    if(codeArray.filter(x => x === code).length > 0) {
      console.log("the cart contains the product at index" + codeArray.indexOf(product.code));
      return codeArray.indexOf(product.code);

    }
    console.log("cart is not empty but does not contain the product.");
    return -1;
  }


  getTotalAmount(){
    let amounts: Number[] = [];
    return this.cartLine.map(x => amounts.push(x.getAmount())).reduce((a,b) => a + b, 0);
  }

  subtractItemFromCart(product: Product) {
    this.cartLine[this.findItemInCart(product)].decreaseQuantityByOne();
  }

  removeItemFromCart(product: Product) {
    if(this.findItemInCart(product) >= 0){
      this.cartLine.splice(this.findItemInCart(product), 1);
    }
  }
}
