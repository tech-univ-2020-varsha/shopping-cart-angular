import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/Product';
import { CartDetailService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(
    private cartDetailService: CartDetailService
    ) { }

  count = 0;
  @Input()
  product: Product;

  increment = () => {
   // console.log('inc', this.count, this.product.quantity);
   if (this.count < this.product.quantity) {
    this.count++;
    this.updateCart();
  }
  }

  decrement = () => {
   // console.log('dec', this.count, this.product.quantity);

   if (this.count > 0) {
    this.count--;
    this.updateCart();
     }
  }


  updateCart = () => {
    const cartProduct = [{
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.count,
      imageLink: this.product.imageLink,
      category: this.product.category

     }];
    console.log(cartProduct);
    this.cartDetailService.updateCart({products: cartProduct})
    .subscribe(data => {
      // console.log(cartProduct);
      // console.log(data);
    });

  }

  ngOnInit(): void {
  }

}
