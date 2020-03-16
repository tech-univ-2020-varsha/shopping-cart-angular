import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../shared/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
    @Input()
    productsData: Product[];
  ngOnInit(): void {
    console.log(this.productsData);

      }

}
