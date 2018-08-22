import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {Product} from '../_models/product.model';
import {DomSanitizer} from '@angular/platform-browser';
import {Url} from 'url';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  imgBlob: Url;

  constructor(private productService: ProductService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    }, error1 => console.log(error1));

    this.productService.getProductImage().subscribe((imgBlob) => {
      this.imgBlob = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imgBlob);
      console.log(imgBlob);
    }, error1 => console.log(error1));
  }

}
