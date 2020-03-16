import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CART_URL} from '../constants/url';
@Injectable({
  providedIn: 'root'
})
export class CartDetailService {

  constructor(private http: HttpClient) { }

  updateCart(product): Observable<any> {
    return this.http.put(`${CART_URL}`, product);
  }

  getCartDetails(): Observable<any> {
    return this.http.get(CART_URL);
  }
}
