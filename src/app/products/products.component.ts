import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {Product} from '../_models/product.model';
import {DomSanitizer} from '@angular/platform-browser';
import {Url} from 'url';
import {AuthenticationService} from '../_services/AuthenticationService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  imgBlob: Url;

  constructor(public productService: ProductService, private sanitizer: DomSanitizer, authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    }, error1 => console.log(error1));

    this.productService.getProductImage().subscribe((imgBlob) => {
      this.imgBlob = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imgBlob);
    }, error1 => console.log(error1));
  }

  onBuyNow(code: String){
    this.router.navigate(['/products', code]);
  }

}
