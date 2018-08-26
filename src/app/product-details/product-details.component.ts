import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../_models/product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {Url} from 'url';
import {MessageService} from '../_services/message.service';
import {OrderDetails} from '../_models/order_details.model';
import {CartLineModel} from '../_models/cart_line.model';
import {OrderService} from '../_services/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  imgBlob: Url;
  itemAddedToCart = false;

  buyNowForm = new FormGroup({
    quantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)])
  });


  constructor(private sanitizer: DomSanitizer, private productService: ProductService, private route: ActivatedRoute, private messageService: MessageService, private router: Router, private orderService: OrderService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let code = params['id'];
      this.productService.getProductByCode(code).subscribe((product: Product) => {
        console.log(product);
        this.product = product;
      });
    });

    this.productService.getProductImage().subscribe((imgBlob) => {
      this.imgBlob = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imgBlob);
    });
  }

  onSubmit() {
    //this.messageService.createCustomerInfoComponent = true;
    let model = new CartLineModel(this.product, this.buyNowForm.get('quantity').value);
    this.orderService.getCurrentCart().addItemToCart(model.product, model.quantity);
    this.messageService.itemAddedToCart = true;
    console.log(this.messageService.itemAddedToCart);
    setTimeout(() => this.messageService.itemAddedToCart = false, 4000);
    this.router.navigate(['/products']);

  }

  onCancel() {
    this.messageService.createCustomerInfoComponent = false;
    this.router.navigate(['/products'])
  }
}
