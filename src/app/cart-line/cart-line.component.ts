import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../_models/product.model';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductService} from '../_services/product.service';
import {Url} from 'url';
import {ImageService} from '../_services/image.service';

@Component({
  selector: 'app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.css']
})

export class CartLineComponent implements OnInit {
  @Input()imgBlob: Url;
  @Input()product: Product;
  @Input()quantity: Number;

  constructor(private sanitizer: DomSanitizer, private productService: ProductService, public imageService: ImageService) {

  }

  ngOnInit() {

  }

}
