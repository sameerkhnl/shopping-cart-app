import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../_models/product.model';
import {registerContentQuery} from '@angular/core/src/render3/instructions';

@Injectable()
export class ProductService {
  baseurl = "http://localhost:8080/auth/products"

  constructor(private http: HttpClient){

  }


  getProducts() {
    this.http.get<Product[]>(this.baseurl).subscribe((products: Product[]) => {
      for(let product of products){
        console.log(product);
      }
    }, error => console.log("error fetching products", + error.toString()));
  }





}
