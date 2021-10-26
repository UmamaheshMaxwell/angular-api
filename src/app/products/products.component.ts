import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service'
  import { from } from 'rxjs';

  @Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe(data => {
      console.log(data);
      this.products = [data]
    })
  }

}
