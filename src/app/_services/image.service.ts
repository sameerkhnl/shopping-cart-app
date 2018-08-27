import {Injectable, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Url} from 'url';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ImageService{
  imgBlob: Url;
  imageurl = "http://localhost:8080/products/image";
  imgObservable: Observable<Url>;

  constructor(private productService: ProductService, private sanitizer: DomSanitizer, private http: HttpClient){
    const httpOptions = {
      headers: new HttpHeaders({
        "Accept": "text/plain"
      }),
      responseType: 'text' as 'text'
    };
    this.http.get(this.imageurl, httpOptions).subscribe((imgBlob) => {
      this.imgBlob = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imgBlob);
      this.imgObservable = of(this.imgBlob);
    });
  }

}
