import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../_models/product.model';
import {registerContentQuery} from '@angular/core/src/render3/instructions';
import {Observable} from 'rxjs';
import {ResponseContentType} from '@angular/http';

@Injectable()
export class ProductService {
  baseurl = "http://localhost:8080/auth/products";
  imageurl = "http://localhost:8080/auth/products/image"

  constructor(private http: HttpClient){

  }


  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl);
  }

  getProductImage() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Accept": "text/plain"
      }),
      responseType: 'text' as 'text'
    };
    return this.http.get(this.imageurl, httpOptions);
  }





}
