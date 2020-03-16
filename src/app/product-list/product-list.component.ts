import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../services/product-details.service';
import {Product} from '../shared/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productDetailsService: ProductDetailsService
    ) { }
    productsData: Product[];
  ngOnInit(): void {
    this.productDetailsService.getProducts()
    .subscribe(data => {
      this.productsData = data;
    }
      );
  }

}
