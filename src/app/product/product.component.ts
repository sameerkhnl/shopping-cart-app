import { Component, OnInit } from '@angular/core';
import {MessageService} from '../_services/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
