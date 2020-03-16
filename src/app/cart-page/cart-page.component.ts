import { Component, OnInit } from '@angular/core';
import { CartDetailService } from '../services/cart-service.service';
import {filterProducts} from '../shared/filterProducts';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor( private cartDetailService: CartDetailService) { }
  cartDetails;
  categories;
  ngOnInit(): void {
    this.cartDetailService.getCartDetails()
    .subscribe(data => {
      this.cartDetails = filterProducts(data, 'category');
      this.categories = Object.keys(this.cartDetails);
      // this.cartDetails = data;
      // console.log(cartProduct);
      // console.log(data);
    });
  }


  continueShopping = () => {
console.log('continue');
  }

}
