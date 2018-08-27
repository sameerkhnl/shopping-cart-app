import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {Product} from '../_models/product.model';
import {DomSanitizer} from '@angular/platform-browser';
import {Url} from 'url';
import {AuthenticationService} from '../_services/AuthenticationService';
import {Router} from '@angular/router';
import {MessageService} from '../_services/message.service';
import {ImageService} from '../_services/image.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(public productService: ProductService, private sanitizer: DomSanitizer, public authService: AuthenticationService, private router: Router, public messageService: MessageService, public imageService: ImageService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    }, error1 => console.log(error1));
  }

  onBuyNow(code: String){
    this.router.navigate(['/products', code]);
  }

}
