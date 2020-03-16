import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CART_URL} from '../constants/url';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  updateCart(product): Observable<Object> {
    return this.http.put(`${CART_URL}`, product);
  }
}
