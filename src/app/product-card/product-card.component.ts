import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor() { }

  count = 0;
  @Input()
  product: Product;

  increment = () => {
   // console.log('inc', this.count, this.product.quantity);
    if (this.count < this.product.quantity) {
    this.count++;
    }
  }

  decrement = () => {
   // console.log('dec', this.count, this.product.quantity);

    if (this.count > 0) {
    this.count--;
    }
  }

  ngOnInit(): void {
  }

}
