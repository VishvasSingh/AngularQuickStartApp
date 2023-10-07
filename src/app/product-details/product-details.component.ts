import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../product-list/products.interface'
import {CartService} from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product: Product | undefined
  isProductAvailable: boolean = true

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((product) => {return product.id===productIdFromRoute});

    if (this.product) {
      this.isProductAvailable = this.isAvailable(this.product);
  } else {
      this.isProductAvailable = false;
  }
    
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart`)
  }

  isAvailable(product:Product) : boolean {
    if (product.availability === 'out of stock') {
      return false
    }
    else return true;
  }



}
