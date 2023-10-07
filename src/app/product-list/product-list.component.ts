import { Component, OnInit } from '@angular/core';
import { Product, products } from './products.interface'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
  
})
export class ProductListComponent implements OnInit {
    products: Product[] = []
    constructor () {}

    ngOnInit(): void {
      this.products = products
      
    }

    share = (name:string) => {
      alert(`${name} has been shared`)
    }

    onNotify(name:string) {
      alert(`You will be notified when ${name} goes on sale`);
    }

}
