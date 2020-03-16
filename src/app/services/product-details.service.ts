import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {PRODUCTS_URL} from '../constants/url';
import {filterProducts} from '../shared/filterProducts';
import {Product} from '../shared/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  constructor(private http: HttpClient) { }
    API_URL = PRODUCTS_URL;
  getProducts = (): Observable<any> => {
    return this.http.get(this.API_URL);
  }

  getFilteredProducts = (data: Product[], filterType: string, )
                         : Product[]  => {
                           const groupedProducts = filterProducts(data, 'category' );
                           return groupedProducts[filterType];

  }

  getFilterTypes = (data: Product[]) => {
   return Object.keys(filterProducts(data, 'category' ));

  }

}
