import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    new Product(101, 'Adidas Shoe', 2000, 4.5),
    new Product(102, 'Nike Shoe', 3000, 4.8),
    new Product(103, 'Sketcher Shoe', 4000, 4.3),
    new Product(104, 'Puma Shoe', 5000, 4.2),
    new Product(105, 'Woodland Shoe', 6000, 4.7)
  ];

  getProducts(){
    return this.products;
  }

  constructor() { }
}
