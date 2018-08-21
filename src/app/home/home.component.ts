import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras, ParamMap, Params, Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  queryParamMap: ParamMap;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((value: ParamMap ) => {
      this.queryParamMap = value;
    })
  }



}
