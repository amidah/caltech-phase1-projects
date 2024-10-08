import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];


  constructor (private productService: ProductsService){}

  ngOnInit(): void{
    this.products = this.productService.getProducts();
  }
}
