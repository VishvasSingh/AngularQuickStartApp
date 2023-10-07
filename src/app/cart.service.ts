import { Injectable } from '@angular/core';
import { Product } from './product-list/products.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];


  constructor(
    private http: HttpClient
  ) { }


  addToCart(item:Product)
  {
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices () {
    return this.http.get<{type:string, price:number}[]>(
      '/assets/shipping.json'
    )
  }

}
