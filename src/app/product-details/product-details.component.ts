import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../_models/product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {Url} from 'url';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  imgBlob: Url;

  buyNowForm = new FormGroup({
    quantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)])
  });



  constructor(private sanitizer: DomSanitizer, private productService: ProductService, private route: ActivatedRoute) {

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
  };
}
